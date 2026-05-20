// Start of Document \</C/dev/repos/paste-wrong-file-blocker/src/extension.ts\>

import * as vscode from "vscode";
import { registerCommands } from "./commands";

export function activate(context: vscode.ExtensionContext): void {
  registerCommands(context);
}

export function deactivate(): void {
  // No cleanup required
}

// End of Document \</C/dev/repos/paste-wrong-file-blocker/src/extension.ts\>
