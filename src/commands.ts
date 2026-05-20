// Start of Document \<C:/dev/repos/paste-shield/src/commands.ts\>

import * as vscode from "vscode";
import { executePasteWithValidation } from "./pasteLogic";

export function registerCommands(context: vscode.ExtensionContext): void {
  const pasteCommand = vscode.commands.registerCommand(
    "pasteShield.pasteWithValidation",
    executePasteWithValidation
  );

  context.subscriptions.push(pasteCommand);
}

// End of Document \<C:/dev/repos/paste-shield/src/commands.ts\>
