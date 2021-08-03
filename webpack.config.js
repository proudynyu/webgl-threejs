export default {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "main.js",
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    contentBase: "./dist",
    watchContentBase: true,
    open: true,
    https: false,
    useLocalIp: true,
    disableHostCheck: true,
    overlay: true,
    noInfo: true,
  },
};
