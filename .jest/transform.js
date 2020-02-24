module.exports = require("babel-jest").createTransformer({
  presets: [
    [
      "@babel/preset-env",
      { targets: { node: "current" }, modules: "commonjs" }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
    "babel-preset-gatsby"
  ]
});
