// package.json에서 "type": "module"을 설정하고, ESModule 방식을 사용하려면

import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    createProxyMiddleware("/auth", {
      target: "https://happily-humorous-mammal.ngrok-free.app",
      changeOrigin: true,
    })
  );
}