"use strict";
// Start of Document \<C:/dev/repos/paste-wrong-file-blocker/out/extension.js\>
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
function activate(context) {
    //
    // Unified paste handler — all paste vectors funnel here.
    //
    const handler = async () => {
        const isSafe = await validateClipboardAgainstFile();
        if (!isSafe) {
            vscode.window.showErrorMessage("Paste blocked by Paste Wrong File Blocker.");
            return;
        }
        //
        // SAFE → perform the real paste using the built‑in implementation.
        //
        await vscode.commands.executeCommand("editor.action.clipboardPasteAction");
    };
    //
    // Register explicit Ctrl+V command.
    //
    context.subscriptions.push(vscode.commands.registerCommand("pasteWrongFileBlocker.paste", handler));
}
//
// VALIDATION LOGIC
// Placeholder. Replace with Safe‑Pass header/footer validation.
//
async function validateClipboardAgainstFile() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return false;
    }
    const clipboardText = await vscode.env.clipboard.readText();
    const documentText = editor.document.getText();
    //
    // TODO: Replace with real Safe‑Pass header/footer validation.
    // Current behavior: always allow.
    //
    return true;
}
function deactivate() { }
// End of Document \<C:/dev/repos/paste-wrong-file-blocker/out/extension.js\>
//# sourceMappingURL=extension.js.map