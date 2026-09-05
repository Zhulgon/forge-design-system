# FORGE Token Pipeline

`@forge/tokens` is the first executable implementation layer of FORGE.

## Contract

Figma remains the design source for token intent. The repository stores a normalized, reviewable representation of the 307 FORGE v1 variables and generates deterministic platform artifacts.

Token dependency direction is:

```text
Primitive -> Theme -> Semantic -> Components

Layout -----------\
Density -----------> Components
Typography --------/
Motion ------------/
```

Semantic color and Theme remain independent axes. A semantic token may point at a Theme token, allowing `data-forge-theme` to change brand identity without duplicating component styles.

## Runtime axes

| Axis | Values | Default |
|---|---|---|
| Theme | Neutral, Clinical, Cyber, Organic, Premium | Neutral |
| Color mode | Light, Dark, HC Light, HC Dark | Light |
| Density | Compact, Comfortable, Touch | Comfortable |
| Motion | Standard, Reduced | Standard |

This yields 120 possible runtime combinations without generating 120 component variants.

## Governance

1. Never hand-edit generated artifacts.
2. Token renames/removals are public API changes.
3. Primitive values are internal implementation details for product code.
4. Semantic tokens are the default color API for components/products.
5. CI runs `check:generated` and fails when source and generated artifacts diverge.
