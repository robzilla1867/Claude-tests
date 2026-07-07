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


## Container width

The main content container (header, hero, sections, footer) should use a max-width of
1400px, not a narrower default — pages should feel wide and make use of larger screens
rather than staying boxed into a ~1200px column.