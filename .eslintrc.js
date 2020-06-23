module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true,
        "jest": true,
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 11,
        "sourceType": "module",
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "no-console": "off",
        "import/extensions": ["error","always"],
        "react/prop-types": [0],
        "jsx-quotes": ["error", "prefer-single"],
        "react/destructuring-assignment": [1, 'never'],
        "react/jsx-one-expression-per-line": [0],
    }
};
