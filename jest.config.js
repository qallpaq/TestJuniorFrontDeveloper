module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '.(js|jsx)$': require.resolve('babel-jest'),
    '.(ts|tsx)$': require.resolve('ts-jest'),
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    'utils/(.*)': '<rootDir>/client/src/utils/',
  },
};
