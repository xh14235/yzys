module.exports = {
  devServer: { // 记住，别写错了devServer
    host: "localhost", // 设置本地服务器   选填
    port: 8080, // 设置本地默认端口  选填
    proxy: {
      "/admin": {
        target: "http://116.236.30.222:9000",
        changeOrigin: true,
        pathRewrite: {
          "^/admin": "/admin"
        }
      },
      "api": {
        target: "https://tianqiapi.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  }
};
