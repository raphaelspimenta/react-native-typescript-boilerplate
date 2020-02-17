module.exports = {
  preset: 'react-native',
  modulePaths: ['src'],
  transformIgnorePatterns: ['node_modules/(?!(react-native|@nextel/odin|nextel-jord)/)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/ios/'],
  transform: {
    '^.+.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
}
