# @forge/tokens

Canonical code transport layer for the **307 variables / 7 collections** in FORGE v1.

## Source of truth

The source JSON in `source/` mirrors the current FORGE Figma variable architecture:

- Primitive Color — 93
- Theme — 25
- Semantic Color — 73
- Density — 17
- Layout — 63
- Typography — 29
- Motion — 7

Generated files are deterministic and must not be edited manually.

## Generate

```bash
pnpm --filter @forge/tokens generate
```

Verify generated files are committed and current:

```bash
pnpm --filter @forge/tokens check:generated
```

## Web usage

```ts
import '@forge/tokens/css';
```

Set the four independent root axes:

```html
<html
  data-forge-theme="clinical"
  data-forge-color-mode="dark"
  data-forge-density="comfortable"
  data-forge-motion="standard"
>
```

Defaults are `neutral`, `light`, `comfortable`, and `standard`.

Components consume semantic variables:

```css
.button {
  color: var(--fg-semantic-action-primary-text);
  background: var(--fg-semantic-action-primary-default);
  min-height: var(--fg-density-control-height-md);
  border-radius: var(--fg-layout-radius-md);
}
```

Product code should **not** consume primitive colors directly.

## Cross-platform naming

`generated/json/code-syntax.json` mirrors the Figma code-syntax contract:

- Web: `var(--fg-semantic-action-primary-default)`
- Android: `fg_semantic_action_primary_default`
- iOS: `FGTokens.semanticActionPrimaryDefault`

The JSON artifact preserves every collection, mode, token type, literal value and alias so native adapters can generate platform-specific resources without reinterpreting Figma.
