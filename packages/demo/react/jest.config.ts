/* eslint-disable */
export default {
  displayName: 'demo-react',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/packages/demo/react',
};
