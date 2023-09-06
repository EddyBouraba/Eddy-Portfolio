import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: "html",
    middleware: [
      function viteCSP(req, res, next) {
        // Content Security Policy pour se protéger contre XSS et autres injections
        res.setHeader(
          "Content-Security-Policy",
          "script-src 'self'; object-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self'"
        );
        next();
      },
    ],
  },
});
