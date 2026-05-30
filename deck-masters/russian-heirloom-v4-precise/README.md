# Russian Heirloom Deck — v4 (precise blue cut, full card kept)

Great-grandmother's vintage 36-card Russian deck.

This version removes the **blue grid background** precisely up to each card's
true outer edge, keeping the **entire** card (worn/frayed edges and all — nothing
trimmed inside the perimeter). Everything outside the card is transparent.

## Lineage
- **v1** (`russian-heirloom-v1/`) — base crops WITH the blue grid (immutable source).
- **v2-masked** — blue removed but card edge eroded ~2px (slightly inside perimeter).
- **v3-nopaper** — cream paper also keyed out (ink-only); reverted, kept for reference.
- **v4-precise** (this folder) — blue removed at the true outer edge, full card preserved.

## Method (per card, from the v1 blue master)
1. Detect blue grid: `(B-R>8) & (B-G>2)`.
2. Flood-fill blue from the image border inward → exterior background only
   (so blue *inside* the art, e.g. costume flowers, is preserved).
3. `binary_opening(exterior, iter=3)` to sever thin blue leaks that poke into the
   card through worn/light edges — this prevents biting into the card while
   keeping the true outer boundary (closing was rejected: it dilated the edge and
   added a blue halo).
4. Card = NOT exterior; fill holes; largest connected component.
5. Safe fringe cleanup: drop only *strongly* blue pixels `(B-R>10)&(B-G>4)` within
   the outer 2px ring — removes residual grid line, never touches cream paper.
6. Alpha feathered 0.6px; cropped to bounding box.

Verified directly on J♦ (most leak-prone card) via outline overlay: cut follows
the true card edge, falcon and top-right corner intact. Card order unchanged.
