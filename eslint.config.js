import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    },
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        plugins: {
            import: importPlugin
        },
        rules: {
            'comma-dangle': ['error', 'never'],
            'class-methods-use-this': 'off',
            'global-require': 'off',
            'object-curly-newline': [
                'error',
                {
                    consistent: true,
                    multiline: true
                }
            ],
            'import/no-extraneous-dependencies': 'off',
            radix: ['error', 'as-needed'],
            'no-param-reassign': ['error', { props: false }],
            'max-len': ['error', { code: 100, ignoreComments: true }],
            'no-unused-vars': ['warn'],
            'no-console': ['warn']
        }
    }
];
