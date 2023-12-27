import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|s)sx?$': '@swc/jest',
  },
  maxWorkers: '100%',
  testMatch: ['**/test/**/*.test.ts'],
};

export default config;
