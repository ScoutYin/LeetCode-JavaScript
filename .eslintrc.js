module.exports = {
	root: true, // 指定为根配置，不会再向上查找eslint配置
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended' // eslint-config-prettier和eslint-plugin-prettier的组合语法糖
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	// 规则覆盖
	rules: {
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true, // 使用单引号
				useTabs: true, // 使用tab代替空格缩进
				tabWidth: 2,
				trailingComma: 'none' // 尾部的逗号
			},
			{
				usePrettierrc: false // 不使用.prettierrc配置文件
			}
		],
		'no-unused-vars': 0
	}
};
