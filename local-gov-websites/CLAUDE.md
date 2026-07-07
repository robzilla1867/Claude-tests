## Government / public sector style

- Trustworthy, calm tone — navy, muted blues, restrained accent colour use
- WCAG 2.2 AA minimum contrast everywhere
- Plain English copy, no marketing language
- Simple nav, minimal decoration, GDS-influenced layout conventions
- Footer includes accessibility statement and privacy policy links


## Tone of voice

Calm and simple, above all else. Every header and piece of content should be genuinely 
helpful — write as if a competent, patient person is explaining something to someone who's 
tired, busy, or a bit overwhelmed.

- Plain English. Short sentences. No jargon, no marketing language, no exclamation points.
- Headers should tell the reader exactly what they'll get if they click or read on — 
  "Find a Family Hub near you" rather than "Family Hub Locator" or "Discover Our Services"
- Never oversell or hype anything. No "amazing," "exciting," "don't miss out" — the tone is 
  helpful, not persuasive
- Reassuring without being sentimental — "If you're not sure where to start, that's OK" reads 
  well; overly warm or twee phrasing does not
- Be direct about what something is and what it does before adding any supporting detail
- If unsure whether a line is too clever or too soft, simplify it further


## Page container

The entire page — including section backgrounds — sits within a single centred wrapper, 
max-width 1400px, margin: 0 auto. Do not let section backgrounds stretch full viewport width; 
every section (hero, top tasks, news, footer) stays within the same 1400px container.

The space created on either side of the wrapper on screens wider than 1400px is plain white 
(or the site's neutral background colour — not a section's accent colour). This should never 
be filled with colour, imagery, or content — it's intentional whitespace.


## Hero banner padding

The hero section should have noticeably less top and bottom padding than a typical default — 
target roughly 40% less (e.g. if the default would be around 120px top/bottom, aim for closer 
to 70px). The hero should feel compact and tight, not like it's floating in empty space. 
Keep left/right padding as normal — this only applies to top and bottom.


## Footer layout

Four-quadrant grid, split by a horizontal divider line through the vertical middle.

**Top-left:** Logo — smaller than the header logo (this overrides the global "logo slightly 
bigger" rule for this specific placement only)
**Top-right:** Social media icon buttons (row, small, consistent size)
**Horizontal divider line** — full width, separating top half from bottom half
**Bottom-left:** Accessibility statement, cookies policy, privacy policy — as text links, 
inline or stacked, separated by a small divider or spacing
**Bottom-right:** Copyright line (e.g. "© [year] Derbyshire County Council. All rights reserved.")

Structure as a 2x2 CSS grid (or two stacked flex rows) — the top-left/top-right pairing and 
bottom-left/bottom-right pairing should visually align as columns, with the horizontal line 
acting as a clear break between the two halves.

Keep the footer's background a neutral or dark neutral tone (e.g. off-white or navy), generous 
padding, and legible link text at normal body size — not tiny fine print.


## Typography and spacing (body content only — header and footer keep their own tighter, 
compact spacing as defined above)

- **Font size** — slightly larger than typical web defaults across the board (body text, nav, 
  headings). If default body text would normally be 16px, use closer to 18px, scaling other 
  text sizes up proportionally.
- **Line height** — 1.6–1.7 for body text and list items, rather than the tighter browser 
  default (~1.4)
- **Paragraph spacing** — clear margin between paragraphs, roughly 1.5x the font size, not 
  relying on line-height alone
- **Heading spacing** — more space above headings than below, so each heading visually groups 
  with the content that follows rather than everything running together
- **Card/box gaps** — double the default gap between cards or boxes (e.g. top tasks, news 
  cards) — roughly 48px rather than a default ~24px. Applies to spacing between boxes, not 
  padding inside them.
- **No eyebrows** — don't add small label/category text above headings (e.g. "SERVICES" above 
  "Find a Family Hub"). Headings stand alone.
- **Title weight** — avoid heavy/bold weights (700+) on headings; use 400–500 instead, even 
  for h1/h2. Titles should feel calm and understated, not shouty.

  ## Page types

Rules below apply per page type. "Homepage" rules take priority on the homepage; all other 
page types inherit the general gov-style, tone, and typography rules above unless stated 
otherwise here.

### Homepage
- Hero section as previously defined (headline, mission statement, CTA, reduced padding)
- No page-title block or breadcrumb bar — the hero serves that purpose

### Landing page / content page (all pages except the homepage)
- **Page header block** — every page apart from the homepage has a solid orange block at the 
  very top of the page, directly below the site header/nav. This block contains:
  - The page's H1 title
  - Breadcrumb navigation (e.g. Home > Childcare > Find a Family Hub), sitting above or 
    directly below the H1 within the same block
  - This creates visual consistency with the homepage hero — every page has a strong, 
    colour-anchored top section, just smaller and more utilitarian than the homepage hero
- Orange block: full width of the page container (not full viewport — stays within the 1400px 
  wrapper per the page container rule), moderate padding (noticeably less than the homepage 
  hero — this is a page-identifier band, not a hero)
- H1 text colour: dark navy or white — whichever passes WCAG 2.2 AA contrast against the 
  orange background (check both and use whichever is compliant, defaulting to navy if both pass)
- Breadcrumb links: smaller text than the H1, same contrast rule applies
- Below the orange block, the rest of the page follows normal body content spacing/typography 
  rules as defined above

  ## Spacing below page header block

On all pages except the homepage, reduce the gap between the bottom of the orange page-header 
block and the content that follows by roughly 20% compared to the default spacing Claude Code 
would otherwise apply. This keeps the page feeling connected to its header rather than leaving 
a large empty gap immediately below it. This does not apply to the homepage, which has no 
orange block.


  ## Left navigation

The left-hand navigation currently lacks visual presence and gets lost against the page 
content. Apply the following:

- **Background panel** — give the nav column a distinct light background (a pale tint of 
  navy or blue from the palette, e.g. Blue at its lightest stop), clearly separating it from 
  the white/off-white main content area
- **Active page indicator** — the current page's nav item gets a left border accent (3-4px, 
  primary navy or blue) plus a subtle background tint, distinct from inactive items
- **Nav item weight** — medium weight (500) on nav labels, slightly heavier than the reduced 
  body/heading weight used elsewhere, so the nav reads as structural navigation rather than 
  body text
- **Spacing** — generous vertical gap between nav items (consistent with the wider body 
  spacing already defined) so items are easy to scan individually
- **Sticky positioning** — the nav stays in view as the user scrolls the main content, rather 
  than scrolling out of sight after the first screen
- **Column width** — give the nav enough width to breathe; avoid a cramped narrow column 
  squeezed against the content