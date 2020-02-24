module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/.jest/transform.js"
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx)"],
  setupFiles: [`<rootDir>/.jest/loadershim.js`]
};
