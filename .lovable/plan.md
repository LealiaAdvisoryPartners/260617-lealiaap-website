## Objective
Move the Services overview text from the body section into the hero area beneath the page title, and remove the dedicated Overview body section.

## Changes

### 1. `src/pages/Services.tsx`
- In the hero: replace the single placeholder `<p>` subtitle with a styled block containing the three overview paragraphs (`servicespage.overview.p1`, `p2`, `p3`) in a `space-y-5` layout matching the current overview styling.
- Remove the `ServicesOverview` import and its usage inside `<main>`.
- Remove `overview` from the `sections` array used by the sidebar and scroll-spy logic, so the sidebar starts directly with Buy-Side (renumbered as 01).

### 2. `src/components/services/ServicesOverview.tsx`
- No longer imported; can be left in place or removed. I will leave it untouched to avoid unnecessary deletion.

## Result
The hero will display the page title "Our Services" followed immediately by the three overview paragraphs. The body will begin directly with the Buy-Side section, and the sidebar will list: 01 Buy-Side, 02 Sell-Side, 03 Performance, 04 Corporate Finance.