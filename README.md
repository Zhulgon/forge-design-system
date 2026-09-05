# FORGE Design System

Universal, multi-platform design system.

The canonical design source is **FORGE v1** in Figma. This repository is the implementation source for design tokens, framework-neutral contracts, web/native adapters, documentation, CI and vertical extension libraries.

## Package architecture

- `@forge/tokens` — generated platform token artifacts.
- `@forge/contracts` — framework-neutral semantic contracts.
- `@forge/web` — reference DOM/CSS implementation.
- `@forge/react` / `@forge/vue` — thin web adapters.
- `@forge/flutter` / `@forge/compose` / `@forge/swift` — native adapter boundaries.
- `@forge/docs` — Storybook/docs, fixtures, migration guidance.
- `@forge/extensions-*` — domain libraries. Extensions may depend on Core; Core never depends on extensions.

## Non-negotiable rules

1. Product code consumes semantic tokens, never primitive palette values directly.
2. Theme, color mode, density and motion are root-level context, not repeated component props.
3. Figma states and code semantics stay aligned.
4. Figma Slots map to composition APIs rather than variant explosion.
5. Public API changes ship with docs, accessibility behavior, tests and migration notes.
6. Vertical semantics never leak back into Core without proven reuse across at least two independent verticals.
