## Government / public sector style

- Trustworthy, calm tone — navy, muted blues, restrained accent colour use
- WCAG 2.2 AA minimum contrast everywhere
- Plain English copy, no marketing language
- Simple nav, minimal decoration, GDS-influenced layout conventions
- Footer includes accessibility statement and privacy policy links


## Footer layout

Four-quadrant grid, split by a horizontal divider line through the vertical middle.

**Top-left:** Logo — smaller than the header logo (this overrides the global "logo slightly bigger" rule for this specific placement only)
**Top-right:** Social media icon buttons (row, small, consistent size)
**Horizontal divider line** — full width, separating top half from bottom half
**Bottom-left:** Accessibility statement, cookies policy, privacy policy — as text links, inline or stacked, separated by a small divider or spacing
**Bottom-right:** Copyright line (e.g. "© [year] Derbyshire County Council. All rights reserved.")

Structure as a 2x2 CSS grid (or two stacked flex rows), not a single row of items — the top-left/top-right pairing and bottom-left/bottom-right pairing should visually align as columns, with the horizontal line acting as a clear break between the two "quarters" of content above and below it.

Keep the footer's background a neutral or dark neutral tone (e.g. off-white or navy, matching the gov colour palette), generous padding, and legible link text at normal body size — not tiny fine print.


## Hero banner padding

The hero section currently has excessive top and bottom padding. Reduce it significantly — 
target roughly 40% less vertical padding than a typical default hero section (e.g. if the 
default would be around 120px top/bottom, aim for closer to 70px). The hero should feel 
compact and tight, not like it's floating in empty space. Keep left/right padding as normal — 
this only applies to top and bottom.


## Page container

The entire page — including section backgrounds — sits within a single centred wrapper, 
max-width 1400px, margin: 0 auto. Do not let section backgrounds stretch full viewport width; 
every section (hero, top tasks, news, footer) stays within the same 1400px container.

The space created on either side of the wrapper on screens wider than 1400px is plain white 
(or the site's neutral background colour — not a section's accent colour). This should never 
be filled with colour, imagery, or content — it's intentional whitespace, keeping the whole 
page feeling calm, contained, and simple, consistent with the rest of the gov-style rules.


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
- If unsure whether a line is too clever or too soft, simplify it further — plain and 
  slightly plain-feeling is always the safer choice over anything clever or emotive


  ## Typography and spacing adjustments

- **No eyebrows** — don't add small label/category text above headings (e.g. "SERVICES" 
  sitting above "Find a Family Hub"). Headings should stand alone without a label line 
  introducing them.
- **Box/card gaps** — double the default gap between cards or boxes (e.g. top tasks, news 
  cards). If the default grid gap would normally be around 24px, use roughly 48px instead. 
  This applies to spacing between boxes, not padding inside them.
- **Title boldness** — reduce the font-weight on headings. Avoid heavy/bold weights (700+); 
  use a lighter or medium weight (400–500) instead, even for h1/h2. Titles should feel calm 
  and understated, not shouty.