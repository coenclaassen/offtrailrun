# Offtrailrun Homepage V2

## Goal

Evolve the existing Offtrailrun homepage rather than rebuilding it.

The homepage should convert runners into registering for a specific Offtrailrun event.

Main conversion:
“Reserve my map”

This is event registration, not newsletter signup.

## Flow

Keep the existing AIDA structure:

1. Attention — Hero
2. Interest — Run hard. Think fast.
3. Understanding/desire — How it works
4. Desire — photography/social vibe
5. Action — Next run
6. Objection handling — FAQ
7. Action — final event registration

## Brand direction

Modern running culture meets forest navigation.

Tone:
- short
- confident
- energetic
- minimal explanation
- seduce first
- explain only where uncertainty prevents action

## APPROVED HOMEPAGE COPY

The copy in this section is approved. Do not rewrite, improve, shorten, or expand it. Do not invent additional sections. Dutch copy will be handled later.

### HERO

A different run starts here.

Map in hand. No route to follow.

Find your way through the forest.

Primary CTA:
See the next run

Secondary CTA:
How it works

Small text:
Eindhoven · First timers welcome

### INTEREST

Run hard. Think fast.

The quickest route isn't always the obvious one.

Forest over asphalt.
Wrong turns happen.
Every run is different.

### HOW IT WORKS

Map. Checkpoints. Go.

01 / Get the map
See the course for the first time.

02 / Find the points
Navigate from checkpoint to checkpoint.

03 / Pick your line
Trail or shortcut. You decide.

### SOCIAL / PHOTOGRAPHY

No route. Better stories.

Got lost?

Compare notes afterwards.

### NEXT RUN

NEXT RUN

Saturday [DATE]

[FOREST], Eindhoven

[TIME] · ±75 min · First timers welcome

Registration closes in

[COUNTDOWN]

We make a map for every runner.
Registration closes two weeks before.

CTA:
Reserve my map

Small text:
Your first 2 runs are free. We'll count on you being there.

### CLOSED EVENT STATE

REGISTRATION CLOSED

Saturday [DATE]

[FOREST], Eindhoven

Maps are being prepared. This run is closed.

NEXT UP

Saturday [NEXT DATE]

[NEXT FOREST], Eindhoven

[TIME] · ±75 min · First timers welcome

Registration is open.

CTA:
Reserve my map

### FAQ

Still unsure?

Start here.

Who is this for?

Runners who want to try something different.

First timer or experienced, it doesn't matter. You don't need navigation talent. Curiosity helps.

I've never done anything like this before.

Good.

Most people haven't. We'll show you what you need before you start.

Do I need to be fast?

No.

Speed helps. So does choosing the right route.

Run it hard or take your time.

What if I get lost?

You probably will.

Stop. Check the map. Figure it out.

That's part of the run.

What about GPS?

Wear your watch. Bring your phone.

Neither will tell you which way to go.

GPS is useful afterwards when you want to see where you actually went.

What if I just follow someone?

Bad strategy.

Starts are staggered and other runners might be heading somewhere completely different.

Rather not go alone? You can run as a pair.

Do I need to understand the map first?

No.

We'll explain the essentials before you start.

Want a head start?

CTA:
Read the basics

Why does registration close two weeks before?

Because we're making a map for you.

Once registration closes, we start preparing the run.

Missed it? The next one will already be waiting.

I want more. Can I keep joining?

Absolutely.

Your first 2 runs are free.

After that, we ask you to become a member for €20 a year.

Forest access, maps and organising the runs cost money. This keeps it all running without making it expensive.

CTA:
Become a member

Will there be a bag drop?

Yes.

Leave your bag and extra layers with us while you run.

Still have a question?

start@offtrailrun.com

### FINAL CTA

See you in the forest.

Saturday [DATE]

[FOREST], Eindhoven

[TIME] · ±75 min

First name

Email

Optional checkbox:
Keep me posted about future Offtrailruns too.

CTA:
Reserve my map

We're making one for you.

If plans change, let us know.

### SUCCESS STATE

You're in.

Your map is reserved.

Saturday [DATE]

[FOREST], Eindhoven

[TIME]

We've sent the details to [EMAIL].

See you in the forest.

## Event model

There will be multiple events per year.

Each event will eventually have:
- date
- registration closing date
- location
- start time
- approximate duration

Registration normally closes around two weeks before the event.

Do not use “Full” unless actual capacity limits are added later.

## Membership

First 2 runs are free.

After that membership is €20/year.

Detailed membership information belongs on /membership.

Do not add detailed KOVZ information to the homepage.

## Current implementation

- `src/components/LandingPage.astro` contains the shared English and Dutch homepage markup, responsive section layouts, event rendering, FAQ, signup form, and client-side submission states.
- `src/i18n/en.ts` and `src/i18n/nl.ts` contain locale-specific homepage copy, SEO content, image alt text, event data, FAQ content, and form messages using the same object shape.
- `src/config/design.ts` defines reusable colors, typography classes, layout width, radii, heights, and gutters.
- `src/styles/global.css` imports Tailwind, defines base global behavior, and supplies the responsive hero imagery and overlays.
- Event data is currently static in each translation file. `LandingPage.astro` maps two event records into cards; there is no CMS or event API.
- The signup form posts JSON to `/.netlify/functions/signup`. `netlify/functions/signup.mjs` validates first name, email, and consent, then creates or updates a contact in the Brevo list configured by `BREVO_LIST_ID` using `BREVO_API_KEY`. The current flow is contact/newsletter-oriented and will need to represent event registration for this redesign.

## Implementation constraint

Evolve the existing implementation. Reuse its shared locale routes, component architecture, SEO handling, design configuration, responsive assets, FAQ behavior, and Brevo integration where they support this brief. Do not rebuild the homepage architecture without a concrete implementation need.
