// tsconfig.js
// JS mirror of tsconfig.ts for Node build scripts (Internal Only)
// <C:/dev/repos/paste-shield/tsconfig.js>

exports.tsconfig = {
    compilerOptions: {
        module: "commonjs",
        target: "es2020",
        outDir: "out",
        rootDir: "src",
        strict: true,
        sourceMap: true,
        noImplicitAny: true,
        esModuleInterop: true,
        skipLibCheck: true
    },
    include: ["src"]
};

// End of Document <tsconfig.js>
