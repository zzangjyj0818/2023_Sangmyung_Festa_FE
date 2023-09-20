const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: "http://27.96.131.202:8080",
      changeOrigin: true,
    })
  );
};