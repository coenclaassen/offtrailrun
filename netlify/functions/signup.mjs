const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

const parseBody = (event) => {
  const body = event.body ?? "";
  const contentType = event.headers["content-type"] ?? event.headers["Content-Type"] ?? "";

  if (contentType.includes("application/json")) {
    return JSON.parse(body || "{}");
  }

  const params = new URLSearchParams(body);

  return {
    firstName: params.get("firstName"),
    email: params.get("email"),
    consent: params.get("consent"),
    source: params.get("source"),
  };
};

const brevoHeaders = (apiKey) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  "api-key": apiKey,
});

const buildContactPayload = ({ email, firstName, source, listId }) => ({
  email,
  attributes: {
    FIRSTNAME: firstName,
    SOURCE: source,
  },
  listIds: [listId],
});

const buildContactUpdatePayload = ({ firstName, source, listId }) => ({
  attributes: {
    FIRSTNAME: firstName,
    SOURCE: source,
  },
  listIds: [listId],
});

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { message: "Method not allowed" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const rawListId = process.env.BREVO_LIST_ID;
  const listId = Number(rawListId);

  if (!apiKey || !Number.isInteger(listId)) {
    return jsonResponse(500, { message: "Signup is not configured yet." });
  }

  let body;

  try {
    body = parseBody(event);
  } catch {
    return jsonResponse(400, { message: "Invalid form submission." });
  }

  const firstName = String(body.firstName ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const consent = body.consent === true || body.consent === "true" || body.consent === "on";
  const source = "offtrailrun-landing-page";

  if (!firstName || !EMAIL_PATTERN.test(email) || !consent) {
    return jsonResponse(400, { message: "Please enter a valid name and email, and confirm consent." });
  }

  const createPayload = {
    ...buildContactPayload({ email, firstName, source, listId }),
    updateEnabled: true,
  };

  const createResponse = await fetch(BREVO_CONTACTS_URL, {
    method: "POST",
    headers: brevoHeaders(apiKey),
    body: JSON.stringify(createPayload),
  });

  if (createResponse.ok) {
    return jsonResponse(200, { message: "Signed up." });
  }

  const updateResponse = await fetch(`${BREVO_CONTACTS_URL}/${encodeURIComponent(email)}`, {
    method: "PUT",
    headers: brevoHeaders(apiKey),
    body: JSON.stringify(buildContactUpdatePayload({ firstName, source, listId })),
  });

  if (updateResponse.ok) {
    return jsonResponse(200, { message: "Signed up." });
  }

  return jsonResponse(502, { message: "Could not complete signup." });
};
