// esbuild.config.ts
// Deterministic esbuild bundler configuration for PasteShield (Internal Only)
// <C:/dev/repos/paste-shield/esbuild.config.ts>

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

// End of Document <esbuild.config.ts>
