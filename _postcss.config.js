const purgeCSS = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [purgeCSS({ content: ["source/**/*.*"] })],
};
