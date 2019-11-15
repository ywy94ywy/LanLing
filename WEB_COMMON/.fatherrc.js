export default {
  esm: "rollup",
  cjs: "rollup",
  cssModules: {
    type: true,
    generateScopedName: "[path]__[local]___[hash:base64:5]"
  },
  extraBabelPlugins: [["import", { libraryName: "antd", style: true }]]
};
