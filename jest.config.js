module.exports = {
  transform: {
    "^.+\\.jsx?$": "<rootDir>/jest-preprocess.js",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
    "^Components(.*)$": "<rootDir>/src/components$1",
    "^Common(.*)$": "<rootDir>/src/components/common$1",
    "^Images(.*)$": "<rootDir>/src/images$1",
    "^Utils(.*)$": "<rootDir>/src/utils$1",
  },
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/.cache/"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },
  testURL: "http://localhost",
  setupFiles: ["<rootDir>/loadershim.js"],
}
