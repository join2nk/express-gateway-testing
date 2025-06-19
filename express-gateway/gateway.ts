import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const GATEWAY_PORT = 3001;
const TARGET_SERVICE_PORT = 3000;
const TARGET_SERVICE_URL = `http://localhost:${TARGET_SERVICE_PORT}`;
console.info(`Target service URL: ${TARGET_SERVICE_URL}`);
console.info(`Gateway will run on port: ${GATEWAY_PORT}`);
app.get('/api',(req,res)=>{
  res.send('Hello from the Gateway!');
})




app.listen(GATEWAY_PORT, () => {
  console.log(`Gateway is running on http://localhost:${GATEWAY_PORT}`);
});

//---

// static files
app.use(express.static("../nextjs-app/public")); // Serve static files from the Next.js project's public directory
// Proxy requests to the Next.js app
app.use("/app", createProxyMiddleware({
  target: TARGET_SERVICE_URL,
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/app': '/app', // Remove '/app' prefix when forwarding to the target service
  },
}));
// for static files, we use a different prefix
// This is to avoid conflicts with the Next.js app's asset prefix
app.use("/_app", createProxyMiddleware({
  target: TARGET_SERVICE_URL,
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/_app': '', // Remove '/_app' prefix when forwarding to the target service
  },
}));