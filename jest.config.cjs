/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  rootDir: "./",
  moduleNameMapper: {
    ".(css)$": "identity-obj-proxy",
    "^~/(.*)$": "<rootDir>/src/store/",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFiles: ["./__tests__/environment.ts"],
  setupFilesAfterEnv: ["./__tests__/setup.ts"],
  reporters: ["default", "jest-sonar"],
  coverageThreshold: {
    global: {
      statements: 3,
      branches: 2,
      functions: 3,
      lines: 3,
    },
  },
  collectCoverageFrom: ["src/**"],
  collectCoverage: false,
  coveragePathIgnorePatterns: ["/dist/", "/storybook-static/", "\\.d.ts"],
  coverageReporters: ["html", "text", "json", "lcov"],
  maxWorkers: 2,
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./__tests__/tsconfig.json" }],
  },

  testEnvironmentOptions: {
    testURL: "http://localhost",
  },
};
