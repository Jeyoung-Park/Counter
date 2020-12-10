// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   // 절대경로로 컴포넌트 추가
//   plugins:[
//     [
//       'babel-plugin-root-import',
//       {
//         rootPathPrefix:'~',
//         rootPathPrefix:'src',
//       },
//     ],
//   ],
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};