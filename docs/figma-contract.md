# Figma → Code Contract

| Figma | Code | Rule |
|---|---|---|
| VARIANT | typed enum/union | Preserve semantic meaning. |
| BOOLEAN | boolean | Binary visibility/capability only. |
| TEXT | string/localized message | Content, not geometry. |
| INSTANCE_SWAP | icon/component prop | Keep constrained component families. |
| SLOT | children/named slot/builder | Preserve semantic order and intent. |
| Theme/Density/Motion modes | provider/context/root attributes | Never repeat on every component. |
| Focus/Disabled/Error/etc. | runtime state + accessibility semantics | Visual state must reflect actual behavior. |
