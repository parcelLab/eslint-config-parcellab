module.exports = {
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "semi": [2, "never"],
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-var": 2,
    "no-undef": 2,
    "prefer-arrow-callback": "off",
    "no-unused-vars": 2,
    "no-useless-escape": "off",
    "no-use-before-define": [
      2,
      {
        "functions": false
      }
    ],
    "no-sequences": 2,
    "array-bracket-spacing": 0,
    "max-len": 0,
    "no-console": "off",
    "no-dupe-keys": "error",
    "arrow-parens": "off",
    "comma-dangle": [
      2,
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ],
    "keyword-spacing": [
      2,
      {
        "before": true,
        "after": true,
        "overrides": {
          "return": {
            "after": true
          },
          "throw": {
            "after": true
          },
          "case": {
            "after": true
          }
        }
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "new-cap": [
      2,
      {
        "newIsCap": true,
        "newIsCapExceptions": [],
        "capIsNew": false,
        "capIsNewExceptions": [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List"
        ]
      }
    ],
    "new-parens": "error",
    "newline-per-chained-call": [
      2,
      {
        "ignoreChainWithDepth": 4
      }
    ],
    "no-lonely-if": "error",
    "no-multi-assign": [
      2
    ],
    "no-multiple-empty-lines": [
      2,
      {
        "max": 2,
        "maxEOF": 0
      }
    ],
    "no-new-object": "error",
    "no-plusplus": "off",
    "no-restricted-syntax": [
      2,
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
      },
      {
        "selector": "ForOfStatement",
        "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        "selector": "WithStatement",
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ],
    "no-spaced-func": "error",
    "no-tabs": "error",
    "no-trailing-spaces": 0,
    "no-whitespace-before-property": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "one-var-declaration-per-line": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "require-jsdoc": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "switch-colon-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "indent": [2, 2]
  }
}
