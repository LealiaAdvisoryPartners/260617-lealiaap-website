## Goal

Fix only the per-member layout on `src/pages/Team.tsx`. Leave hero, CTA, typography, colors, spacing, and all other pages untouched.

## Changes (scoped to the `teamMembers.map(...)` block only)

### 1. Mobile (`<lg`) order
Render a single mobile-only column with this explicit order:
1. Name + role
2. Image
3. Email + LinkedIn
4. Bio paragraphs

### 2. Desktop/tablet (`lg+`) alternating layout
Two-column grid (`lg:grid-cols-12`, same gaps as today). Per member:
- **Even index (0, 2, ...)** — image + contacts on the **left** column, name + role + bio on the **right**.
- **Odd index (1, 3, ...)** — name + role + bio on the **left**, image + contacts on the **right**.

The contacts (email + LinkedIn links) move from under the bio to **directly under the image**, inside the image column, on lg+.

### Implementation approach

Inside the existing `motion.article`, replace the current single grid with:

```text
<div class="lg:hidden">   ← mobile block, fixed order 1-4
  name/role
  image
  contacts
  bio
</div>

<div class="hidden lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
  {isEven ? (
    <>
      <div class="lg:col-span-5">image + contacts</div>
      <div class="lg:col-span-7">name/role + bio</div>
    </>
  ) : (
    <>
      <div class="lg:col-span-7">name/role + bio</div>
      <div class="lg:col-span-5">image + contacts</div>
    </>
  )}
</div>
```

Both blocks reuse the exact same JSX snippets (image with blur glow + number badge, contacts row, name/role/bio block) — just rearranged. No style, size, color, or copy changes.

## Out of scope
- Hero section
- CTA section
- SEO, translations, routing
- Any other page or component
