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

## Current vertical slice

Core Actions are [`Button`](docs/button.md), [`Icon Button`](docs/icon-button.md), [`Link`](docs/link.md), and [`Split Button`](docs/split-button.md). They demonstrate the intended path from Figma semantic tokens through framework-neutral contracts and web CSS to thin React adapters.

## Non-negotiable rules

1. Product code consumes semantic tokens, never primitive palette values directly.
2. Theme, color mode, density and motion are root-level context, not repeated component props.
3. Figma states and code semantics stay aligned.
4. Figma Slots map to composition APIs rather than variant explosion.
5. Public API changes ship with docs, accessibility behavior, tests and migration notes.
6. Vertical semantics never leak back into Core without proven reuse across at least two independent verticals.
