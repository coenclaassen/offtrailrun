# AGENTS.md

## Project
Build and maintain a bilingual marketing site for Off Trail Run.

## Stack
- Astro
- Tailwind CSS
- Netlify deployment
- GitHub repository
- Mobile-first responsive design

## Execution Behavior
- Act as an implementation-focused developer, not a designer or brand strategist.
- Do not reinterpret the visual direction.
- Do not invent new sections, patterns, or features unless explicitly requested.
- Do not replace provided values with "better" values.
- If something is unspecified, choose the simplest implementation that matches the existing rules.
- Preserve structure and consistency over creativity.

## Core Architecture
- Use one shared page component per page type for shared markup and styling.
- Use one shared design config file for reusable design values.
- Use one translation file per language.
- Use separate route files for English and Dutch.
- Do not duplicate page markup across languages.

Current file structure:
- `src/config/design.ts`
- `src/i18n/en.ts`
- `src/i18n/nl.ts`
- `src/components/LandingPage.astro`
- `src/components/StartPage.astro`
- `src/components/SeoHead.astro`
- `src/styles/global.css`
- `src/pages/index.astro`
- `src/pages/nl/index.astro`
- `src/pages/start.astro`
- `src/pages/nl/start.astro`
- `netlify/functions/signup.mjs`
- `public/robots.txt`

## File Responsibilities
- `src/config/design.ts` = reusable design values only.
- `src/i18n/en.ts` and `src/i18n/nl.ts` = text content only, including SEO titles and descriptions.
- `src/components/LandingPage.astro` = shared landing page markup and styling.
- `src/components/StartPage.astro` = shared start page markup and styling.
- `src/components/SeoHead.astro` = shared SEO/head metadata.
- `src/styles/global.css` = Tailwind import, global base styles, and shared global CSS such as hero background images.
- `src/pages/index.astro`, `src/pages/nl/index.astro`, `src/pages/start.astro`, and `src/pages/nl/start.astro` = locale route wrappers only.
- `netlify/functions/signup.mjs` = signup form serverless function.
- `public/robots.txt` = crawler rules and sitemap location.

## Implementation Rules
- Use Astro, not React.
- Use Tailwind CSS for styling.
- Use semantic HTML.
- Use a mobile-first approach.
- Keep interactions lightweight.
- Keep route files minimal: they should only select locale and render the shared page component.
- Do not add extra dependencies unless clearly needed.
- Prefer consistency over clever abstractions.
- Keep code easy to edit manually.

## Abstraction Rules
- Do not create extra components unless they clearly reduce duplication.
- Do not create a larger design system than the specified files.
- Do not introduce helper utilities unless they are reused and clearly improve maintainability.
- Keep the architecture flat and easy to edit.

## Dependency Rules
- Do not add dependencies unless clearly necessary.
- Prefer Astro and Tailwind built-ins.
- Use native HTML behavior where possible.
- For FAQ, use native `<details>` / `<summary>`.
- Use the official Astro sitemap integration for sitemap generation.

## Layout Rules
- Max page width: `1280px`.
- Breakpoint from mobile to desktop: `768px`.
- Page horizontal padding:
  - mobile: `px-[30px]`
  - desktop: `md:px-[55px]`
- Keep all content centered within the max page width.
- Stack content vertically on mobile unless stated otherwise.

Desktop layout rules:
- features: 3 columns
- steps: 3 columns
- event cards: 2 columns

Mobile layout rules:
- features: 1 column
- steps: 1 column
- event cards: 1 column

## Design Values
- `cornerRadius = 20`
- `buttonHeight = 60`
- `featureHeight = 90`
- `stepHeight = 450`
- `gutterSmall = 20`
- `gutterLarge = 30`

Use these as implementation constraints, not suggestions.

## Typography
Fonts:
- `h1 = Barlow Condensed, 700`
- `h2 = Barlow Condensed, 700`
- `h3 = Barlow Condensed, 700`
- `h4 = Barlow Condensed, 400`
- `h5 = Manrope, 400`
- `h6 = Manrope, 700`
- `p = Manrope, 400`

Desktop sizes:
- `h1 = 67 / 105%`
- `h2 = 38 / 130%`
- `h3 = 28 / 130%`
- `h4 = 21 / 150%`
- `h5 = 21 / 150%`
- `h6 = 18 / 150%`
- `p = 16 / 150%`

Mobile sizes:
- `h1 = 67 / 105%`
- `h2 = 38 / 130%`
- `h3 = 21 / 130%`
- `h4 = 16 / 150%`
- `h5 = 16 / 150%`
- `h6 = 18 / 150%`
- `p = 16 / 150%`

## Colors
- `white = #ffffff`
- `black = #1d1d1f`
- `lightGrey = #f5f5f7`
- `darkGrey = #ececf0`
- `lightAccent = #e5f4f2`
- `darkAccent = #009379`

Keep color usage easy to update. Avoid spreading raw color values unnecessarily across multiple files.

## Vertical Section Spacing
Only use these Tailwind classes for section-level vertical padding:
- `py-[60px] md:py-[120px]`
- `py-[60px]`
- `py-[50px]`
- `py-[40px]`
- `py-[30px]`
- `py-[16px]`
- `py-[12px]`
- `py-[6px]`

Rules:
- Do not invent new `py` values for sections.
- Do not create spacing tokens or variables for these section `py` values.
- Internal spacing may use other explicit Tailwind gap/padding values where already defined by the design rules.

## Styling Rules
- Reuse values from `design.ts` where practical.
- Do not scatter repeated layout constants across files.
- Keep internal spacing simple and consistent with the provided design values.
- Do not introduce alternate spacing systems.

## Interaction Rules
- FAQ should use native `<details>` / `<summary>`.
- "Join now" should scroll to the signup section.
- "How it works" should scroll to the steps section.
- EN/NL switch should link between English and Dutch routes.
- Language switching should be route-based, not client-side state.

## Content And Translation Rules
- English and Dutch translation files must use the exact same object shape.
- Shared components read content from a single `copy` object.
- Do not put styling, class names, or markup in translation files.
- Do not hardcode visible copy in shared components.
- Keep SEO titles and descriptions in the translation files.
- Do not rewrite or improve copy unless explicitly asked.
- Preserve provided wording exactly, except for minor syntax fixes required by code.

## SEO Rules
- Use `SeoHead.astro` for shared SEO metadata.
- Keep route-specific SEO values in `src/i18n/en.ts` and `src/i18n/nl.ts`.
- Use `https://offtrailrun.com` as the canonical site URL.
- Keep canonical URLs, language alternates, Open Graph, and Twitter metadata in sync for all routes.
- Do not add structured data or analytics unless explicitly requested.
- Keep `public/robots.txt` aligned with the generated sitemap URL.

## Asset Rules
- Use WebP for photographic raster images.
- Keep SVGs for map/course/start-page symbols and illustrations.
- Hero images are referenced from `src/styles/global.css`.
- Current hero breakpoints:
  - default: `/images/hero_1400.webp`
  - `min-width: 1401px`: `/images/hero_2560.webp`
  - `min-width: 2561px`: `/images/hero_3840.webp`
- Do not reintroduce unused PNG fallbacks unless explicitly requested.

## Component Guidance
- Feature items are simple rounded blocks with an icon and one short line of text.
- Step cards are larger rounded cards with a label, heading, and paragraph.
- Event cards are rounded cards with title, date, bullet list, and timing details.
- Start page content should remain in the shared `StartPage.astro` component and language translation files.
- SEO metadata should be rendered through `SeoHead.astro`.

## Icon Rules
- Use one simple outline icon set consistently.
- Prefer lucide icons if an icon library is needed.
- Feature icons should map to lucide:
  - leaf
  - route
  - heart
- Event note may use a lucide shield-check icon.
- Do not introduce decorative icon usage outside explicitly described places.

## Preferred Implementation Order
1. Inspect existing Astro and Tailwind setup.
2. Update `design.ts` only when reusable design values change.
3. Update `en.ts` and `nl.ts` together, keeping object shapes identical.
4. Update `LandingPage.astro` for landing page markup/styling changes.
5. Update `StartPage.astro` for start page markup/styling changes.
6. Update `SeoHead.astro` if SEO metadata changes.
7. Keep route files minimal.
8. Verify anchors, language links, FAQ behavior, SEO metadata, and sitemap output.

## If Something Is Unclear
- Choose the simplest implementation that matches the rules above.
- Avoid over-engineering.
- Do not redesign the page unless explicitly asked.
- Keep structure shared and content separate.
- Make conservative assumptions.

## Output Expectations
- Make the smallest set of changes needed.
- Keep code readable and easy to edit manually.
- Prefer explicit code over clever abstractions.
- Keep the implementation stable and internally consistent.

## Done When
- The landing page renders in English at `/`.
- The landing page renders in Dutch at `/nl/`.
- The start page renders in English at `/start`.
- The start page renders in Dutch at `/nl/start`.
- Shared markup exists in one component per page type.
- Translation files are separate and consistent.
- CTA anchor links work.
- FAQ opens and closes natively.
- Layout is responsive from mobile to desktop.
- SEO metadata is present for all routes.
- Sitemap and robots output are correct.
- Code is clean, internally consistent, and easy to update.
