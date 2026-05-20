"use strict";
// extension.ts
// Paste Wrong File Blocker (Internal Only)
// Deterministic paste interceptor with Safe‑Pass header/footer validation.
// <C:/dev/repos/paste-wrong-file-blocker/src/extension.ts>
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
function extractHeader(line) {
    const match = line.match(/^###### <(.+)>/);
    return match ? match[1].trim() : null;
}
function extractFooter(line) {
    const match = line.match(/^###### End of Document <(.+)>/);
    return match ? match[1].trim() : null;
}
function findFooter(lines) {
    let i = lines.length - 1;
    // Skip trailing whitespace-only lines (including final newline)
    while (i >= 0 && lines[i].trim() === '') {
        i--;
    }
    // Skip compiler-generated sourcemap lines
    while (i >= 0 && lines[i].trim().startsWith('//# sourceMappingURL=')) {
        i--;
    }
    // If next line upward is empty → semantic boundary → no footer
    if (i >= 0 && lines[i].trim() === '') {
        return null;
    }
    // Attempt to extract footer from this semantic line
    return extractFooter(lines[i] ?? '');
}
function isMarkdownFile(editor) {
    const fileName = editor.document.fileName.toLowerCase();
    return fileName.endsWith('.md');
}
function isSafePass(fullText, clipboardText) {
    const fileLines = fullText.split(/\r?\n/);
    const clipLines = clipboardText.split(/\r?\n/);
    const fileHeader = extractHeader(fileLines[2] ?? '');
    const clipHeader = extractHeader(clipLines[2] ?? '');
    const fileFooter = findFooter(fileLines);
    const clipFooter = findFooter(clipLines);
    if (!fileHeader || !fileFooter || !clipHeader || !clipFooter) {
        return false;
    }
    return fileHeader === clipHeader && fileFooter === clipFooter;
}
async function getClipboardText() {
    return vscode.env.clipboard.readText();
}
function isFullDocumentReplacement(editor, clipboardText) {
    const doc = editor.document;
    const fullRange = new vscode.Range(doc.positionAt(0), doc.positionAt(doc.getText().length));
    const selections = editor.selections;
    if (selections.length !== 1) {
        return false;
    }
    const sel = selections[0];
    const isFullRange = sel.start.isEqual(fullRange.start) && sel.end.isEqual(fullRange.end);
    if (!isFullRange) {
        return false;
    }
    return clipboardText.length > 0;
}
async function handlePaste(editor) {
    const clipboardText = await getClipboardText();
    const docText = editor.document.getText();
    // Non-full replacements always allowed
    if (!isFullDocumentReplacement(editor, clipboardText)) {
        await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
        return;
    }
    // Markdown-only Safe-Pass
    if (isMarkdownFile(editor)) {
        if (isSafePass(docText, clipboardText)) {
            await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
            return;
        }
    }
    // Unsafe full replacement → nanny
    const overridePrompt = "Paste Wrong File Blocker Override Required.\n" +
        "Paste Wrong File Blocker: Full-document replacement detected.\n" +
        "To override, type the exact string: confirmPasteOverride";
    const input = await vscode.window.showInputBox({
        prompt: overridePrompt,
        placeHolder: 'confirmPasteOverride',
        ignoreFocusOut: true,
        value: ''
    });
    if (input === 'confirmPasteOverride') {
        await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
    }
}
function activate(context) {
    const disposable = vscode.commands.registerCommand('pasteShieldInternal.paste', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        await handlePaste(editor);
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
// End of Document \</C/dev/repos/paste-wrong-file-blocker/tmp/extension/out/extension.js\>
//# sourceMappingURL=extension.js.map