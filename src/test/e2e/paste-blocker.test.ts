// Start of Document <C:/dev/repos/paste-shield/src/test/e2e/paste-blocker.test.ts>

import * as assert from "assert";
import * as vscode from "vscode";
import { validateHeaderFooter } from "../../validation";

suite("PasteShield E2E — Header/Footer Validation", () => {

    async function runValidation(input: string) {
        return validateHeaderFooter(input);
    }

    test("Happy Path — Valid header and footer", async () => {
        const input = [
            "Start of Document",
            "payload",
            "End of Document"
        ].join("\n");

        const result = await runValidation(input);
        assert.strictEqual(result.ok, true);
    });

    // A‑Series — Header Failures

    test("A1 — Missing header", async () => {
        const input = [
            "payload",
            "End of Document"
        ].join("\n");

        const result = await runValidation(input);
        assert.strictEqual(result.ok, false);
        assert.strictEqual(result.code, "A1");
    });

    test("A2 — Incorrect header", async () => {
        const input = [
            "Start Document",
            "payload",
            "End of Document"
        ].join("\n");

        const result = await runValidation(input);
        assert.strictEqual(result.ok, false);
        assert.strictEqual(result.code, "A2");
    });

    test("A3 — Malformed header", async () => {
        const input = [
            " Start of Document ",
            "payload",
            "End of Document"
        ].join("\n");

        const result = await runValidation(input);
        assert.strictEqual(result.ok, false);
        assert.strictEqual(result.code, "A3");
    });

    // B‑Series — Footer Failures

    test("B1 — Missing footer", async () => {
        const input = [
            "Start of Document",
            "payload"
        ].join("\n");

        const result = await runValidation(input);
        assert.strictEqual(result.ok, false);
        assert.strictEqual(result.code, "B1");
    });

    test("B2 — Incorrect footer", async () => {
        const input = [
            "Start of Document",
            "payload",
            "End Document"
        ].join("\n");

        const result = await runValidation(input);
        assert.strictEqual(result.ok, false);
        assert.strictEqual(result.code, "B2");
    });

    test("B3 — Malformed footer", async () => {
        const input = [
            "Start of Document",
            "payload",
            " End of Document "
        ].join("\n");

        const result = await runValidation(input);
        assert.strictEqual(result.ok, false);
        assert.strictEqual(result.code, "B3");
    });

    test("B4 — Duplicate footer", async () => {
        const input = [
            "Start of Document",
            "payload",
            "End of Document",
            "End of Document"
        ].join("\n");

        const result = await runValidation(input);
        assert.strictEqual(result.ok, false);
        assert.strictEqual(result.code, "B4");
    });

    test("B5 — Footer not last line", async () => {
        const input = [
            "Start of Document",
            "End of Document",
            "payload"
        ].join("\n");

        const result = await runValidation(input);
        assert.strictEqual(result.ok, false);
        assert.strictEqual(result.code, "B5");
    });

    test("B6 — Footer present but header missing", async () => {
        const input = [
            "payload",
            "End of Document"
        ].join("\n");

        const result = await runValidation(input);
        assert.strictEqual(result.ok, false);
        assert.strictEqual(result.code, "B6");
    });
});

// End of Document <C:/dev/repos/paste-shield/src/test/e2e/paste-blocker.test.ts>
