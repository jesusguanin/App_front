module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // sin jsxImportSource
    plugins: [
      'nativewind/babel',
      'react-native-reanimated/plugin',
    ],
  };
};
