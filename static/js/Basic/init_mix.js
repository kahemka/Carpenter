(function () {
  "use strict";

  function waitUntil(predicate, { interval = 50, timeout = 8000 } = {}) {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      const timer = setInterval(() => {
        if (predicate()) {
          clearInterval(timer);
          resolve(true);
        } else if (Date.now() - start > timeout) {
          clearInterval(timer);
          reject(new Error("waitUntil timeout"));
        }
      }, interval);
    });
  }

  function boot() {
    const init = new BuildConfig([
      "config_shell_admin",
      "config_page_home",
      "config_page_dashboard"
    ]);

    // Ordre recommandé pour limiter le FOUC
    init.loadMetaDescription();
    init.loadCssStyle();
    init.loadJsLib();
    init.loadContent();

    waitUntil(
      () =>
        typeof window.App !== "undefined" &&
        typeof window.App.boot === "function" &&
        document.getElementById("main_home") &&
        document.getElementById("main_dashboard")
    )
      .then(() => window.App.boot())
      .catch((e) => console.warn("App boot skipped:", e.message));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();