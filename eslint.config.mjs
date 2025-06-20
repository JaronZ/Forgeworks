import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.strict,
	tseslint.configs.stylistic,
	prettier,
	{
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.eslint.json",
				ecmaVersion: 2020,
				warnOnUnsupportedTypeScriptVersion: false
			},
			globals: {
				...globals.node
			}
		},
		rules: {
			"no-await-in-loop": "warn",
			"no-constructor-return": "warn",
			"no-duplicate-imports": "error",
			"no-self-compare": "warn",
			"no-template-curly-in-string": "warn",
			"no-unreachable-loop": "warn",
			"no-useless-assignment": "error",
			complexity: "warn",
			"consistent-return": "error",
			"default-case-last": "error",
			eqeqeq: "warn",
			"max-classes-per-file": ["error", { ignoreExpressions: true, max: 1 }],
			"max-depth": ["error", 4],
			"max-nested-callbacks": ["error", 3],
			"max-params": ["error", 4],
			"no-array-constructor": "error",
			"no-invalid-this": "error",
			"no-iterator": "error",
			"no-lone-blocks": "warn",
			"no-new-wrappers": "error",
			"no-proto": "error",
			"no-return-assign": "error",
			"no-throw-literal": "error",
			"no-unused-expressions": "error",
			"no-useless-constructor": "error",
			"no-useless-rename": "error",
			"no-var": "error",
			"prefer-const": "error",
			"require-await": "error",
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/explicit-function-return-type": "warn",
			"@typescript-eslint/member-ordering": "warn"
		},
		ignores: ["node_modules/", "**/kubejs/", "**/*.d.ts", "**/coverage/"]
	}
);
