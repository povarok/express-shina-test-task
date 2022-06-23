module.exports = {
  "extends": "stylelint-config-standard-scss",
  "customSyntax": "postcss-scss",
  "rules": {
    "declaration-no-important": true,
    "selector-class-pattern":'^[a-z][a-zA-Z0-9]+$',//lowerCamelCase: ^[a-z][a-zA-Z0-9]+$
  }
}
