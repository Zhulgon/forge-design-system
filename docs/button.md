# Button

`@forge/react` exposes a semantic, native HTML button. Import the web contract stylesheet once where your application loads FORGE styles.

```tsx
import '@forge/web/button.css';
import { Button } from '@forge/react';

export function SaveDraft() {
  return (
    <Button
      variant="primary"
      leadingIcon={<SaveIcon aria-hidden="true" />}
      onClick={saveDraft}
    >
      Save draft
    </Button>
  );
}
```

## API

`Button` accepts normal native `button` attributes plus the following FORGE props.

| Prop | Values | Default | Notes |
|---|---|---|---|
| `variant` | `primary`, `secondary`, `ghost`, `destructive` | `primary` | Use `destructive` exactly; `danger` is not a FORGE variant. |
| `size` | `sm`, `md`, `lg` | `md` | Values resolve through the root density mode. |
| `loading` | boolean | `false` | Disables interaction, preserves dimensions, and exposes a visible spinner/status. |
| `disabled` | boolean | `false` | Uses native disabled button behavior. |
| `leadingIcon` / `trailingIcon` | React node | — | Composition points for icons or concise supporting content. |

The component forwards its ref to the native `<button>` and defaults `type` to `button`, avoiding accidental form submission. Pass `type="submit"` when submit behavior is intended.

## Accessibility and composition

Use readable children or an explicit `aria-label` for icon-only buttons. Decorative icons should be `aria-hidden`. While loading, the native button is disabled and receives `aria-busy="true"`; its visible spinner is decorative because the busy state carries the accessible state. The existing label remains in the layout so the control does not shift. Native keyboard activation works without custom key handling.

Use the leading and trailing composition props rather than creating icon-specific Button variants. Button does not add product- or vertical-specific props.

## Tokens and root modes

The Button CSS imports the generated token stylesheet and consumes semantic action tokens such as `--fg-semantic-action-primary-default`, `--fg-semantic-action-ghost-hover`, and `--fg-semantic-action-destructive-pressed`. It also consumes density, layout, typography, and motion tokens. It never references primitive palette tokens.

Set modes once on a root ancestor; individual buttons inherit them:

```html
<main
  data-forge-theme="clinical"
  data-forge-color-mode="dark"
  data-forge-density="touch"
  data-forge-motion="reduced"
></main>
```

Do not add primitive color tokens to component CSS, and do not hand-edit generated files in `@forge/tokens`. Update the Figma-derived token sources and regenerate when a token change is needed.
