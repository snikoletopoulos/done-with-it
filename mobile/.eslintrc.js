module.exports = {
	env: {
		es2021: true,
		node: true,
		"react-native/react-native": true,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "react-native", "react-hooks", "@typescript-eslint"],
	rules: {
		"no-console": "warn",
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react/no-unescaped-entities": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react-native/no-unused-styles": "error",
		"react-native/no-inline-styles": "warn",
		"react-native/no-single-element-style-arrays": "error",
	},
};
