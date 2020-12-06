if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/ServiceWorker.js")
    .then(() => console.log("registered"));
}
