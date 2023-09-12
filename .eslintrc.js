module.exports = {
	parser: '@babel/eslint-parser',
	parserOptions: {
		sourceType: 'module',
		requireConfigFile: false,
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				paths: ['./src']
			},
			alias: [['components', './src/components']]
		}
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	plugins: ['@babel', 'react', 'react-hooks', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/no-find-dom-node': 'off'
	}
};
