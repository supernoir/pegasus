module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
      "airbnb",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "prettier/@typescript-eslint",
      "prettier/react"
    ],
    plugins: ["react-hooks"],
    rules: {
      "no-use-before-define": 0,
      "no-plusplus": 0,
      "consistent-return": 0,
      "no-underscore-dangle": 0,
      'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
      "prettier/prettier": ["error"],
      "react/prop-types": 0,
      "react/sort-comp": 0,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
      "react/destructuring-assignment": 0,
      "@typescript-eslint/array-type": 1,
      "@typescript-eslint/no-use-before-define": 0,
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-non-null-assertion": 1,
      "@typescript-eslint/interface-name-prefix": 0,
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      "import/no-useless-path-segments": "off",
      "react/no-array-index-key": 1,
      // a11y
      "jsx-a11y/anchor-is-valid": 0,
      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/no-noninteractive-element-interactions": 0,
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    env: {
      jest: true,
      browser: true
    }
  };
  