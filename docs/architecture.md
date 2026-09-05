# Architecture

```text
extensions-* -> adapters -> web/contracts -> tokens
                        \\-> contracts -> tokens

docs -> public packages
```

Core packages must not import from `@forge/extensions-*`.

## Implementation order

1. Token export pipeline.
2. Contracts package.
3. Web reference primitives.
4. React adapter.
5. Docs/Storybook.
6. Visual + accessibility fixture matrix.
7. Additional framework adapters.
8. Vertical extensions.
