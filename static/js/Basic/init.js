// Init chain for Carpenter + app bootstrap, without inline scripts.
// Comments in English for consistency.

(function () {
  "use strict";

  // Wait helper: resolve when predicate() returns true or timeout.
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
    // BuildConfig with “mix”: shell first, then dashboard
    const init = new BuildConfig(["config_shell", "config_dashboard"]);

    // Recommended order to avoid FOUC and ensure libs are present before content is used
    init.loadMetaDescription();
    init.loadCssStyle();
    init.loadJsLib();
    init.loadContent();

    // After content is injected, wait for App.init + Plotly + the chart container, then run app
    waitUntil(
      () =>
        typeof window.App !== "undefined" &&
        typeof window.App.init === "function" &&
        typeof window.Plotly !== "undefined" &&
        document.getElementById("chart-sales")
    )
      .then(() => window.App.init())
      .catch((e) => console.warn("App init skipped:", e.message));
  }

  // Start on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();