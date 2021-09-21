import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import {terser} from "rollup-plugin-terser";
export default {
  input: "src/index.js",
  output: [{
    file: "dist/bundle.esm.js",
    format: "esm",
  },{
    file: "dist/bundle.cjs.js",
    format: "cjs", // common js
  }],
  plugins: [json(), nodeResolve(),commonjs(),terser()],
  external: ["vue"]
};
