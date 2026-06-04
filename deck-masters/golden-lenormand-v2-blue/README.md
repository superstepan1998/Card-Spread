# Golden Lenormand — v2 (blue-background source)

Re-shot on a **blue background** (folder "golden 2", IMG_1804–IMG_1840) for
cleaner edge separation than the white-desk v1.

## Source order
Photographed in **descending** Lenormand order: IMG_1804 = card 36 (Cross) …
IMG_1839 = card 1 (Rider), IMG_1840 = back cover. Mapping: card N ← IMG_(1840-N).

## Crop method
1. Blue mask: `(B-R>25) & (B-G>15)`, flood-filled from the borders → exterior.
2. Card = largest non-background component; erode 6px to clear the saturated
   blue fringe.
3. 4-corner detection (min-area rectangle) + perspective warp to upright.
4. Capped blue-edge trim: within a thin outer band (≤6% of each side) only,
   shave rows/cols that are still blue — cannot eat into card content even when
   the card art itself contains blue (e.g. Key, Anchor, Book).
5. Rounded transparent corners (radius ≈4.5% short side, 0.8px feather).
6. Resized to 620px wide.

## Lineage
- v1 = white-desk source (kept as `golden-lenormand-v1`).
- `golden-lenormand-v1-deskew-rounded-BASE` = frozen snapshot of the v1
  deskew+rounded result (user asked to preserve it).
- v2-blue (this folder) = current live deck.

Card order must not be changed without explicit instruction.
