Fix hardcoded service section eyebrow numbers on the Services page. After the Overview section was removed, the remaining sections still show `02` through `05` instead of `01` through `04`.

Changes:
- `src/components/services/ServicesBuySide.tsx`: change eyebrow from `02` to `01`
- `src/components/services/ServicesSellSide.tsx`: change eyebrow from `03` to `02`
- `src/components/services/ServicesPerformance.tsx`: change eyebrow from `04` to `03`
- `src/components/services/ServicesModeling.tsx`: change eyebrow from `05` to `04`