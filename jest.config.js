module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.ts?$": "ts-jest"
  },
  "testRegex": "(/__src__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
}