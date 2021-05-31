module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./src/setupTests.js'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  }
};