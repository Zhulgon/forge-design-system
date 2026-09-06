# Icon Button

`IconButton` is a native button for one concise icon action. Import `@forge/web/icon-button.css` with FORGE styles.

```tsx
<IconButton aria-label="Edit record" variant="secondary">{editIcon}</IconButton>
```

It supports Button’s `primary`, `secondary`, `ghost`, and `destructive` variants; `sm`, `md`, and `lg` sizes; native button props; refs; disabled; and loading. An `aria-label` or `aria-labelledby` is required. Icon content is decorative to avoid duplicate names. Do not use an Icon Button when a visible text label is needed.

Styles consume semantic action, layout, density, and motion tokens; never primitive tokens.
