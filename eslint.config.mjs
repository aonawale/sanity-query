import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import jest from 'eslint-plugin-jest'
import tsdoc from 'eslint-plugin-tsdoc'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ['src/**/*.ts'],
    plugins: {tsdoc},
    rules: {
      'tsdoc/syntax': 'warn',
    },
  },
  {
    files: ['**/*.test.ts'],
    ...jest.configs['flat/recommended'],
  },
  {
    ignores: ['dist/', 'coverage/', 'docs/', 'node_modules/'],
  },
)
