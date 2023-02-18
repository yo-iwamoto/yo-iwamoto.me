const astro = require("prettier-plugin-astro");

module.exports = {
  plugins: [astro],
  trailingComma: "all",
  singleQuote: true,
  jsxSingleQuote: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
