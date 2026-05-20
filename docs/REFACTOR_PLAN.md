###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/docs/REFACTOR_PLAN.md\>
# paste-wrong-file-blocker Refactor Plan
### Purpose: Defines the refactor scope, affected components, and required alignment with Identity Envelope Doctrine v1.0
###### \<C:/dev/repos/paste-wrong-file-blocker/docs/REFACTOR_PLAN.md\>

---------------------------------------------------------------------

## 0. Initialization

This branch contains refactor work aligned with Identity Envelope Doctrine v1.0.  
The project is currently in a dirty state and is being prepared for systematic cleanup.

No functional changes have been made yet.

All refactor activity must remain consistent with MY_RULES.md and DOCTRINE_FREEZE.md.

---------------------------------------------------------------------

## 1. Affected Components (Phase 2 Enumeration)

### 1.1 Core Logic (must be rewritten)

- src/extension.ts  
- src/pasteInterceptor.ts  
- src/identityValidator.ts  
- src/commentSyntax.ts  
- src/languageRules.ts  
- src/fileTypeDetector.ts  
- src/jsonExemption.ts  
- src/errorCodes.ts  
- src/logging.ts  

---

### 1.2 Tests (must be replaced)

- src/test/validator.test.ts  
- src/test/paste.test.ts  
- src/test/languageRules.test.ts  
- src/test/commentSyntax.test.ts  
- src/test/jsonExemption.test.ts  
- any malformed envelope tests  
- any snapshot tests  

---

### 1.3 Documentation (must be rewritten)

- README.md  
- docs/DOCTRINE_FREEZE.md  
- docs/REFACTOR_PLAN.md  
- any diagrams  
- any examples  

---

### 1.4 Build / Packaging / VSIX (must be cleaned)

- package.json  
- tsconfig.json  
- webpack.config.js  
- out/extension.js  
- all .vsix artifacts  

---

### 1.5 Workspace / Meta Files

- .vscode/settings.json  
- .gitignore  
- .npmignore  

---------------------------------------------------------------------

## 2. Phase 2 Postconditions

1. All affected components are enumerated.  
2. No refactor work occurs outside the list without updating this document.  
3. Newly discovered files must be added before modification.  
4. Document remains consistent with MY_RULES.md and Doctrine v1.0.

---------------------------------------------------------------------

## 3. Identity Validator Rewrite (Phase 3)

### 3.0 Purpose

Define and implement a deterministic, pure, doctrine‑aligned identity validator for paste-wrong-file-blocker.  
The validator must enforce Identity Envelope Doctrine v1.0 with zero ambiguity and zero repair behavior.

---------------------------------------------------------------------

### 3.1 Validator Requirements

This section defines the mandatory rules, interface, and algorithm the validator must follow.

---

### 3.1.1 Canonical Requirements

The validator must:

1. Operate as a pure function with no side effects.  
2. Accept exactly one header and one footer.  
3. Reject zero headers or zero footers **unless the destination file is unmarked**.  
4. Reject multiple headers or multiple footers.  
5. Apply whitespace‑tolerant normalization.  
6. Apply JSON exemption rules.  
7. Perform no cleanup, no repair, no mutation.  
8. Produce deterministic error codes.  
9. Produce deterministic success/failure states.  
10. Never infer intent.  
11. Never modify the paste buffer.  
12. Never depend on VS Code APIs beyond text access.  
13. Never depend on global state or user configuration.  
14. **Accept all pastes into an unmarked destination file.**

---

### 3.1.2 Canonical Interface

```ts
export interface ValidatorInput {
    text: string;
    expectedHeader: string;
    expectedFooter: string;
    fileType: string;
    commentSyntax: CommentSyntax;
    jsonExempt: boolean;
    destinationIsMarked: boolean;
}

export interface ValidatorOutput {
    status: "ACCEPT" | "REJECT";
    reason: ErrorCode;
    details?: string;
}

export type ErrorCode =
    | "E_NO_HEADER"
    | "E_NO_FOOTER"
    | "E_MULTIPLE_HEADERS"
    | "E_MULTIPLE_FOOTERS"
    | "E_HEADER_MISMATCH"
    | "E_FOOTER_MISMATCH"
    | "E_JSON_EXEMPTION"
    | "E_SYNTAX_UNSUPPORTED"
    | "E_INTERNAL_INVARIANT";

export interface CommentSyntax {
    line: string | null;
    blockStart: string | null;
    blockEnd: string | null;
}

export function validateIdentityEnvelope(
    input: ValidatorInput
): ValidatorOutput;
```

---

### 3.1.3 Canonical Algorithm

1. **Detect destination identity**  
   - If `destinationIsMarked === false` → **ACCEPT immediately**.

2. Normalize whitespace on all candidate header/footer lines.  
3. Detect header occurrences.  
4. Detect footer occurrences.  
5. Reject if header count ≠ 1.  
6. Reject if footer count ≠ 1.  
7. Validate normalized header against canonical form.  
8. Validate normalized footer against canonical form.  
9. Apply JSON exemption rules.  
10. Return ACCEPT or REJECT with deterministic reason.

No mutation.  
No inference.  
No repair.  
No fallback behavior.

---------------------------------------------------------------------

### 3.2 Implementation Boundaries

The validator must not:

- read from disk  
- write to disk  
- modify the editor buffer  
- modify the paste buffer  
- depend on global state  
- depend on user configuration  
- depend on VS Code APIs beyond text access  

The validator must be a pure function.

---------------------------------------------------------------------

### 3.3 Phase 3 Postconditions

Phase 3 is complete when:

1. The validator is fully rewritten.  
2. All logic is deterministic.  
3. All error codes are implemented.  
4. All invariants are enforced.  
5. No repair behavior exists.  
6. JSON exemption is correct.  
7. Unmarked destination rule is implemented.  
8. Tests for validator behavior exist (Phase 5).  
9. REFACTOR_PLAN.md reflects the final validator design.

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/docs/REFACTOR_PLAN.md\>
