module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/*.config.*",
    "!**/node_modules/**",
    "!**/.yarn/**",
  ],
  testMatch: [
    "<rootDir>/__tests__/**/*.(spec|test).ts?(x)",
    "<rootDir>/src/**/*.(spec|test).ts?(x)",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",

    "^src/(.*)$": "<rootDir>/src/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "jest-plugin-context/setup"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.yarn/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "@swc/jest",
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: false,
            dynamicImport: false,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",

    "coverage",
    "src/main.ts",
    ".yarn",
    "src/config.ts",
  ],
  coverageThreshold: {
    global: {},
  },
};
