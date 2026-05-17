// generate-tsconfig-json.ts
// Deterministic emitter for tsconfig.json using typed source-of-truth.
// <C:/dev/repos/paste-shield/generate-tsconfig-json.ts>

import { writeFileSync } from "fs";
import { tsconfig } from "./tsconfig";

writeFileSync(
    "tsconfig.json",
    JSON.stringify(tsconfig, null, 2),
    { encoding: "utf8" }
);

// End of Document <generate-tsconfig-json.ts>
