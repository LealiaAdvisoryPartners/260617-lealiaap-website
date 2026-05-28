## Goal

In the home page Services section (`ActServices` in `src/components/home/FluidHome.tsx`), pin the "Advisory, crafted." title alongside the stacked cards so it stays visible the whole time the cards reveal, and release the title at the same moment the last card begins to unstick — both then scroll off together.

## Changes (single file: `src/components/home/FluidHome.tsx`, `ActServices` ~lines 355–397)

1. **One shared sticky track**
   - Wrap the title block and the cards stack inside a single relative container so they share the same scroll range and release point.

2. **Sticky title**
   - Make the title/eyebrow/subcopy block `sticky top-0` with a low `z-index` (below the cards).
   - Tighten its bottom margin so the first card sits just under it.
   - Keep the existing fade-in motion.

3. **Cards re-tune**
   - Increase each card's sticky `top` offset so cards sit visually below the pinned title (base ~22vh + small per-index stagger), keeping current scale/rotate/translate transforms.

4. **Synchronized release (no trailing spacer)**
   - Do NOT add a spacer after the last card.
   - The wrapper ends right where the last card's sticky range ends, so the title and the last card unstick at the same instant and scroll off together as one block.

5. **CTA placement**
   - Keep the "View all services" CTA outside the sticky wrapper so it appears after both have released.

## Technical notes

- Pure CSS sticky + existing Framer Motion transforms; no new deps.
- Ensure no `overflow-hidden` on ancestors of the sticky wrapper (currently clean).
- `z-index`: title `z-0`, cards `z-10 + index`.

## Out of scope

- No copy, color, typography, or card content changes.
- No changes to other sections.
