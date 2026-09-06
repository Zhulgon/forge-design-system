# Split Button

`SplitButton` exposes two separate native button controls: a primary action and a menu trigger. Import `@forge/web/split-button.css`.

```tsx
<SplitButton menuLabel="More save options" onClick={save} onMenuClick={openMenu}>
  Save
</SplitButton>
```

`menuLabel` is required and the trigger exposes `aria-haspopup="menu"`. The menu implementation remains outside this component; `onMenuClick` is the composition point for an overlay layer. Do not make the whole group one click target or use it for unrelated actions.

Variants are `primary`, `secondary`, and `destructive`; sizes and disabled/loading behavior follow Button. Styles reuse semantic action, density, layout, and focus tokens.
