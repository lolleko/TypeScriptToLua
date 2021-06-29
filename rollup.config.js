import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

// eslint-disable-next-line import/no-default-export
export default {
    input: "src/index.ts",
    output: {
        file: "./dist-deno/mod.js",
        format: "cjs",
    },
    plugins: [resolve(), commonjs(), json(), typescript({ tsconfig: "tsconfig.rollup.json" })],
};
