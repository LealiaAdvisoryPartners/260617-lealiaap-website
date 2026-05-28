## Goal
Make the sticky Services title blend into the page background (no visible "box").

## Change
In `src/components/home/FluidHome.tsx` (`ActServices`, ~line 361), remove `bg-background` from the sticky title wrapper so it inherits the home page's underlying background.

```text
- <div className="sticky top-0 z-0 pt-6 pb-8 md:pt-10 md:pb-10 bg-background">
+ <div className="sticky top-0 z-0 pt-6 pb-8 md:pt-10 md:pb-10">
```

## Notes
- The cards already have their own solid `bg-background` and higher `z-index`, so they continue to fully cover the title as they scroll over it — readability is preserved.
- No other styling, layout, or scroll behavior changes.
