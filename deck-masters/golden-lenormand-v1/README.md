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
