import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.(t|s)sx?$': '@swc/jest',
  },
  maxWorkers: '100%',
};

export default config;
