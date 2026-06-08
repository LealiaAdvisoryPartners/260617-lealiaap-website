# Team page: switch from two columns to one column only on small screens

## Problem
The per-member layout currently switches to the alternating two-column layout at `lg` (1024px). The user wants the two-column desktop layout to persist further down, and only collapse to a single stacked column on genuinely small screens.

## Change
Move the breakpoint from `lg` (1024px) down to `sm` (640px). Tablets and small laptops keep the alternating two-column layout; only phones get the stacked layout.

Scope: `src/pages/Team.tsx`, inside the `teamMembers.map(...)` block only.

### Specifically
- Mobile block wrapper: `lg:hidden` → `sm:hidden`
- Desktop block wrapper: `hidden lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center` → `hidden sm:grid sm:grid-cols-12 sm:gap-8 lg:gap-16 sm:items-center`
- Column spans: `lg:col-span-5` / `lg:col-span-7` → `sm:col-span-5` / `sm:col-span-7`

Gaps tighten on smaller widths (`sm:gap-8`) and open up on `lg:gap-16` so the two-column layout doesn't feel cramped on tablets but keeps the airy desktop spacing.

No other changes — typography, image sizes, contacts, bio, hero, CTA all stay untouched.

## Out of scope
- Hero, CTA, typography, colors, image styling
- Any other page or component
