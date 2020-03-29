const path = require("path");

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "")
  },
  mode: "development"
};
