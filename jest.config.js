module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // Isso garante que ele ignore completamente a pasta 'test' antiga e foque só na 'src'
  testMatch: ['**/src/**/*.spec.ts'], 
};