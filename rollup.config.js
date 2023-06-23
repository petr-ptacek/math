import { defineConfig } from "rollup";

import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs    from "@rollup/plugin-commonjs";
import json        from "@rollup/plugin-json";
import terser      from "@rollup/plugin-terser";

import pkg from "./package.json" assert { type: "json" };

export default defineConfig({
    input: "src/index.js",
    output: [
      {
        name: "math",
        file: "./dist/math.umd.js",
        format: "umd",
        plugins: [
          terser()
        ]
      },
      {
        file: "./dist/math.cjs.js",
        format: "cjs"
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      json()
    ]
  }
);
