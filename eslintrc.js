module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
env: {
    browser: true,
    es6: true,
    node: true,
  },

  rules: {
    quotes: [`error`, `backtick`],
    "react/no-unescaped-entities": `off`,
    "react/prop-types": `off`,
"react/jsx-pascal-case": `off`,
  },
  extends: `react-app`,
}
