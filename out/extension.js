"use strict";
// Start of Document <C:/dev/repos/paste-shield/src/extension.ts>
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
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const validation_1 = require("./validation");
async function performValidatedPaste() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    const clipboardText = await vscode.env.clipboard.readText();
    if (!clipboardText || clipboardText.length === 0) {
        await vscode.window.showErrorMessage("Paste blocked: Clipboard is empty.", { modal: true });
        return;
    }
    const validation = (0, validation_1.validateHeaderFooter)(clipboardText);
    if (!validation.ok) {
        const code = validation.code ?? "UNKNOWN";
        const reason = validation.reason ?? "Unspecified validation failure";
        await vscode.window.showErrorMessage(`Paste blocked (${code}): ${reason}`, { modal: true });
        return;
    }
    await vscode.commands.executeCommand("editor.action.clipboardPasteAction");
}
function activate(context) {
    const disposable = vscode.commands.registerCommand("pasteShield.pasteWithValidation", async () => {
        await performValidatedPaste();
    });
    context.subscriptions.push(disposable);
}
function deactivate() {
    // No-op: included for completeness and future extension.
}
// End of Document <C:/dev/repos/paste-shield/src/extension.ts>
//# sourceMappingURL=extension.js.map