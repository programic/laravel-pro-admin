module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        '@programic/eslint-config-vue3-typescript',
    ],
    parserOptions: {
        ecmaVersion: 2021,
    },
    plugins: [
        'import-newlines',
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'unicorn/prevent-abbreviations': ['error', {
            checkShorthandProperties: true,
            checkProperties: true,
            allowList: {
                FetchParams: true,
                PatchParams: true,
                PostParams: true,
                PutParams: true,
                Props: true,
            },
            ignore: [
                // Vue specific ignores
                '/attrs|src|env|params|prop|props|ref|refs/i',
            ],
        }],
        'no-bitwise': ['error', {
            allow: ['&'],
        }],
        'no-shadow': 'off',
        'max-len': ['error', {
            code: 120,
        }],
        '@typescript-eslint/no-shadow': ['error'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'import/no-extraneous-dependencies': ['error',
            { devDependencies: true },
        ],
        'import-newlines/enforce': ['error',
            { items: 3, 'max-len': 120 },
        ],
    },
};
