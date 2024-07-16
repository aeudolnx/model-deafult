module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // Se estiver usando React
    'plugin:prettier/recommended', // Integrar com Prettier
  ],
  //parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest', // Permite o uso de recursos modernos do ECMAScript
    sourceType: 'module', // Permite o uso de imports
    ecmaFeatures: {
      tsx: true,
      jsx: true, // Permite o uso de JSX se estiver usando React
    },
    project: './tsconfig.json',
  },
  rules: {
    // Adicione ou modifique regras específicas conforme necessário
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'prettier/prettier': 'error', // Mostra erros de Prettier como erros do ESLint
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Desativa a necessidade de declarar explicitamente tipos de retorno
    '@typescript-eslint/no-explicit-any': 'warn', // Mostra avisos ao usar o tipo "any"
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React
    },
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es2021: true,
  },
};
