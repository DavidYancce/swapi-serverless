module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'no-magic-numbers': [
      'warn',
      {
        ignoreArrayIndexes: true,
        ignore: [0, 1, 0.01, 100],
      },
    ],
    'require-await': 'warn',
  },
  overrides: [
    {
      files: ['*.spec.ts'],
      rules: {
        'no-magic-numbers': 'off',
      },
    },
  ],
};
