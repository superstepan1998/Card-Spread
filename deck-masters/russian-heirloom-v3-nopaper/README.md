# Russian Heirloom Deck — v3 (paper removed / transparent)

Great-grandmother's vintage 36-card Russian deck.

This version removes the cream/beige card-stock **paper** so only the printed
artwork (figures, pips, indices) remains, floating on transparency. Designed to
sit on the app's dark background.

## Lineage
- **v1** (`russian-heirloom-v1/`) — base crops WITH original blue grid background (immutable).
- **v2-masked** (`russian-heirloom-v2-masked/`) — blue removed, full cream card kept (transparent outside card only).
- **v3-nopaper** (this folder) — cream paper also keyed out; ink-only floating art.

## Method
Per card: estimate the local paper illumination (grey-dilation + smoothing) so
uneven lighting/shadows don't leave blotches; mark ink where the pixel is
darker than its local paper OR saturated; close small gaps, drop specks below
~400px, and fill holes inside each kept blob so faces stay solid. Alpha feathered 0.6px.

Card order is unchanged from v1/v2. All 36 present and unique.
