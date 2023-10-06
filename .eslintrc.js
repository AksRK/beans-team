module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint', 'prettier', 'import', 'react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    rules: {
        curly: 'error',
        'prettier/prettier': 'error',
        'import/no-unresolved': 'off',
        'import/no-cycle': 0,
        'import/default': 0,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-unescaped-entities': 1,
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions', 'methods'] }],
        'no-console': ['off'],
        'react-hooks/exhaustive-deps': ['off'],
        'prefer-spread': ['off'],
        'eslint-disable-next-line': 'off',
    },
    ignorePatterns: ['.eslintrc.js', 'node_modules', 'lib', 'dir'],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
