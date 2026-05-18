// generate-tsconfig-json.js
// Deterministic emitter for tsconfig.json (Internal Only)
// <C:/dev/repos/paste-shield/generate-tsconfig-json.js>

const { writeFileSync } = require("fs");
const { tsconfig } = require("./tsconfig");

writeFileSync(
  "tsconfig.json",
  JSON.stringify(tsconfig, null, 2),
  { encoding: "utf8" }
);

// End of Document <generate-tsconfig-json.js>
