module.exports = {
    roots: ["<rootDir>/src"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    modulePaths: ["<rootDir>/src", "<rootDir>/components"],
};
