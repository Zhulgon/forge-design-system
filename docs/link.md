# Link

`Link` is a native anchor, not a button. Import `@forge/web/link.css`.

```tsx
<Link href="https://forge.example/docs" trailingIcon={externalIcon}>Documentation</Link>
```

It forwards normal anchor attributes and refs. Variants are `default` and `subtle`; sizes are `sm`, `md`, and `lg`. Use `href` for navigation, keep external-link behavior in normal anchor attributes, and use Button for in-place actions. Leading and trailing content are decorative composition slots.

Link uses semantic text and focus tokens only.
