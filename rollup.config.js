import { defineConfig } from "rollup";
import nodeResolve      from "@rollup/plugin-node-resolve";
import commonjs         from "@rollup/plugin-commonjs";
import pkg              from "./package.json" assert { type: "json" };

export default defineConfig([
    {
      input: "src/index.js",
      output: {
        name: "math",
        file: pkg.browser,
        format: "umd"
      },
      plugins: [
        nodeResolve(),
        commonjs()
      ]
    },
    {
      input: "src/index.js",
      external: [
        "lodash-es"
      ],
      output: [
        {
          file: pkg.main,
          format: "cjs"
        },
        {
          file: pkg.module,
          format: "es"
        }
      ]
    }
  ]
);
