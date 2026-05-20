###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/README.md\>

###### Paste Wrong File Blocker

This extension prevents accidental file replacement by blocking paste operations when wrapper counts do not match. A valid document contains exactly one Start wrapper and exactly one End wrapper. If the pasted content violates this invariant, the paste is rejected.

## Features

- Validates wrapper count before pasting
- Blocks unsafe pastes
- Displays a modal with the reason for rejection
- Provides a command: Paste with Validation

## Command

- pasteShield.pasteWithValidation — performs a paste only if wrapper invariants are satisfied

## Requirements

No additional requirements.

## Extension Settings

This extension does not contribute settings.

## Known Issues

None documented.

## Release Notes

### 0.0.4
Initial implementation of wrapper‑based paste validation.

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/README.md\>
