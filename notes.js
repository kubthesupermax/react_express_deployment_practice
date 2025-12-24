// If your server code and package.json are correct but the app still won’t start,
// one of the last common issues is the PORT already being in use.
//
// This happens when another Node/Express server is still running in the background
// (often from a previous terminal or crashed process).
//
// Symptoms:
// - Error: EADDRINUSE
// - Server logs "listening", then crashes or won’t start
//
// Fix:
// 1. Find what’s using the port:   lsof -i :8080
// 2. Stop that process:            kill -9 <PID>
// 3. Restart the server
//
// Once the port is free, Express will start and routes like /users will work.

// If Vite proxy requests fail with SSL / EPROTO errors,
// check the protocol in vite.config.js.
//
// Our Express server runs on HTTP, not HTTPS.
// If the proxy target uses "https://", Vite will try to send
// an SSL request to a non-SSL server and the request will fail.
//
// Fix: make sure the proxy target uses "http://localhost:PORT".

// React 18 (dev mode) runs useEffect twice due to StrictMode.
// The first request is intentionally aborted during cleanup.
// Axios throws a CANCELED error (ERR_CANCELED), not AbortError.
//
// We must return early for canceled requests so we don’t
// incorrectly set error=true when the data is actually fine.
