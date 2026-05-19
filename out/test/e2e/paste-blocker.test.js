"use strict";
// Start of Document <C:/dev/repos/paste-shield/src/test/e2e/paste-blocker.test.ts>
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const validation_1 = require("../../validation");
suite("PasteShield E2E — Header/Footer Validation", () => {
    async function runValidation(input) {
        return (0, validation_1.validateHeaderFooter)(input);
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
//# sourceMappingURL=paste-blocker.test.js.map