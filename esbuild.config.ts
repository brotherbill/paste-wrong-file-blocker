// Start of Document \</C/dev/repos/paste-wrong-file-blocker/esbuild.config.ts\>
// Deterministic esbuild bundler configuration for Paste Wrong File Blocker (Internal Only)

import { build } from "esbuild";

build({
    entryPoints: ["src/extension.ts"],
    bundle: true,
    platform: "node",
    target: "node20",
    outfile: "out/extension.js",
    sourcemap: true,
    external: ["vscode"]
}).catch(() => process.exit(1));

// End of Document \</C/dev/repos/paste-wrong-file-blocker/esbuild.config.ts\>
