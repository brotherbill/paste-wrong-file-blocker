// Start of Document <C:/dev/repos/paste-shield/src/validation.ts>

export interface ValidationResult {
    ok: boolean;
    reason?: string;
    code?: string;
}

export function validateHeaderFooter(content: string): ValidationResult {
    const normalized = content.replace(/\r\n/g, "\n");
    const lines = normalized.split("\n");

    const HEADER = "Start of Document";
    const FOOTER = "End of Document";

    const headerLine = lines[0] ?? "";
    const footerLine = lines[lines.length - 1] ?? "";

    const hasHeaderRaw = headerLine.length > 0;
    const hasFooterRaw = footerLine.length > 0;

    const headerExact = headerLine === HEADER;
    const headerTrimExact = headerLine.trim() === HEADER;

    const footerExact = footerLine === FOOTER;
    const footerTrimExact = footerLine.trim() === FOOTER;

    // B6 — Footer present but header missing (asymmetric)
    if (!hasHeaderRaw && hasFooterRaw && footerTrimExact) {
        return {
            ok: false,
            code: "B6",
            reason: "B6: Footer present but header missing"
        };
    }

    // A1 — Missing header
    if (!hasHeaderRaw) {
        return {
            ok: false,
            code: "A1",
            reason: "A1: Missing header"
        };
    }

    // A2 — Incorrect header (raw mismatch)
    if (!headerExact) {
        return {
            ok: false,
            code: "A2",
            reason: "A2: Incorrect header"
        };
    }

    // A3 — Malformed header (whitespace, casing, etc.)
    if (!headerTrimExact) {
        return {
            ok: false,
            code: "A3",
            reason: "A3: Malformed header"
        };
    }

    // B1 — Missing footer
    if (!hasFooterRaw) {
        return {
            ok: false,
            code: "B1",
            reason: "B1: Missing footer"
        };
    }

    // B2 — Incorrect footer (raw mismatch)
    if (!footerExact) {
        return {
            ok: false,
            code: "B2",
            reason: "B2: Incorrect footer"
        };
    }

    // B3 — Malformed footer (whitespace, casing, etc.)
    if (!footerTrimExact) {
        return {
            ok: false,
            code: "B3",
            reason: "B3: Malformed footer"
        };
    }

    // B4 — Duplicate footer
    const footerCount = lines.filter(l => l === FOOTER).length;
    if (footerCount > 1) {
        return {
            ok: false,
            code: "B4",
            reason: "B4: Duplicate footer"
        };
    }

    // B5 — Footer in wrong place (must be last line)
    const footerIndex = lines.indexOf(FOOTER);
    if (footerIndex !== -1 && footerIndex !== lines.length - 1) {
        return {
            ok: false,
            code: "B5",
            reason: "B5: Footer not last line"
        };
    }

    return { ok: true };
}

// End of Document <C:/dev/repos/paste-shield/src/validation.ts>
