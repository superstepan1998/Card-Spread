# Golden Lenormand Deck — v1

A standard 36-card Golden/Gilded Lenormand deck (cream cards with gold-dotted
borders, Lenormand number + playing-card inset on each card).

- `golden_<Name>.png` — the 36 cards, named by Lenormand card name (Rider … Cross).
- `golden-back.jpg` — the ornate cherub back cover.

## Source & order
Photographed individually (IMG_1763–IMG_1801, 37 shots = 36 cards in canonical
Lenormand order 1–36, plus the back IMG_1801). Each card already prints its
Lenormand number, which matches the app's `LENORMAND` array order exactly, so
file N maps to `LENORMAND[N-1]`.

## Crop method
Per image: model the background color from the outer 25px ring, mark background
as pixels within color-distance 26 of that mean, flood-fill from the borders to
isolate the exterior, take the largest non-background component as the card,
shave ~6px inward to drop any background sliver, resize to 620px wide. Works for
the neutral blue-gray back too (color-distance is per-image, not a fixed hue).

Card order must not be changed without explicit instruction.

## v1 revisions
- Re-cropped tighter (plain background-color bbox, ~3px inward shave) to remove
  the gray surface margin around every card.
- Card 9 (Flowers) and the back cover were re-photographed (IMG_1802, IMG_1803)
  because the originals ran off the bottom-right edge of the frame; both now
  capture the full card.

## v1 perspective-deskew pass
Because the camera wasn't perfectly perpendicular, straight rectangular crops
left background wedges in the corners. Now each card is detected by its 4 real
corners (min-area rectangle of the card mask) and perspective-warped to a
straight upright rectangle, then inset ~14px. Background detection combines
color-distance from the desk AND a warmth test (cream card R>B vs. cool white
desk B>R) so light card edges no longer bleed into the white desk (fixed
cards 2, 3, 6, 7).

## Rounded corners (transparent)
After deskew, the 4 square corners are cut to the card's real rounded shape via
a rounded-rectangle alpha mask (radius ≈ 4.5% of the short side, 0.8px feather),
so the corners are transparent and the app's dark background shows through —
a floating-card look. golden-back is now a transparent PNG too; golden-mode CSS
uses transparent card-front + object-fit:contain.
