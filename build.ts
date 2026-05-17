// build.ts
// Deterministic build script for PasteShield (Internal Only)
// <C:/dev/repos/paste-shield/build.ts>

import { execSync } from "child_process";
import { tsconfig } from "./tsconfig";
import { writeFileSync } from "fs";

// Emit tsconfig.json deterministically
writeFileSync(
    "tsconfig.json",
    JSON.stringify(tsconfig, null, 2),
    { encoding: "utf8" }
);

// Run TypeScript compiler
execSync("npx tsc -p ./", { stdio: "inherit" });

// End of Document <build.ts>
