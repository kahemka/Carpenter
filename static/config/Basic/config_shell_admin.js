/* global: config_shell_admin */
config_shell_admin = {
  meta: {
    title: "Admin Dashboard (Carpenter)",
    icon: "https://img.icons8.com/color/48/administrator-male--v1.png",
    og: {
      title: "Admin Dashboard (Carpenter)",
      type: "website",
      image: "https://img.icons8.com/color/96/administrator-male--v1.png",
      description: "Sidebar admin + Home + Graphs, rendu via Carpenter.js"
    }
  },

  css: [
    { href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css", rel: "stylesheet" },
    { href: "../../static/css/Basic/style_mix.css", rel: "stylesheet" }
  ],

  js: [
    { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" },
    { src: "https://cdn.plot.ly/plotly-2.31.1.min.js" },
    { src: "../../static/js/Basic/app_mix.js" }
  ],

  // Admin layout: sidebar + topbar + 2 sections (main_home / main_dashboard)
  content: [
    {
      item: "div",
      attributes: { class: "container-fluid" },
      children: [
        {
          item: "div",
          attributes: { class: "row flex-nowrap" },
          children: [
            // Sidebar
            {
              item: "aside",
              attributes: { class: "col-auto col-md-3 col-lg-2 bg-dark text-white min-vh-100 p-0" },
              children: [
                {
                  item: "div",
                  attributes: { class: "d-flex flex-column h-100" },
                  children: [
                    {
                      item: "div",
                      attributes: { class: "p-3 border-bottom border-secondary-subtle" },
                      children: [
                        { item: "span", attributes: { class: "fs-5 fw-semibold" }, textContent: "Admin" }
                      ]
                    },
                    {
                      item: "nav",
                      attributes: { class: "nav nav-pills flex-column mb-auto p-2", id: "sidebar-nav" },
                      children: [
                        {
                          item: "a",
                          attributes: {
                            href: "#/home",
                            class: "nav-link link-light active",
                            "data-route": "home",
                            id: "nav-home"
                          },
                          textContent: "Home"
                        },
                        {
                          item: "a",
                          attributes: {
                            href: "#/dashboard",
                            class: "nav-link link-light",
                            "data-route": "dashboard",
                            id: "nav-dashboard"
                          },
                          textContent: "Dashboard"
                        }
                      ]
                    },
                    {
                      item: "div",
                      attributes: { class: "mt-auto p-3 text-secondary small border-top border-secondary-subtle" },
                      textContent: "© 2025 Admin Demo"
                    }
                  ]
                }
              ]
            },

            // Main area
            {
              item: "div",
              attributes: { class: "col py-0" },
              children: [
                {
                  item: "nav",
                  attributes: { class: "navbar navbar-expand navbar-light bg-light border-bottom" },
                  children: [
                    {
                      item: "div",
                      attributes: { class: "container-fluid" },
                      children: [
                        { item: "span", attributes: { class: "navbar-brand mb-0 h1" }, textContent: "Admin Dashboard" }
                      ]
                    }
                  ]
                },
                { item: "section", attributes: { id: "main_home", class: "container-fluid py-4" } },
                { item: "section", attributes: { id: "main_dashboard", class: "container-fluid py-4 d-none" } }
              ]
            }
          ]
        }
      ]
    }
  ],

  // Map all text nodes and link hrefs in the shell
  mapping_template: {
    // Texts
    "SHELL_SIDEBAR_TITLE":  [[0,0,0,0,0,0],   "textContent"], // "Admin" (corrigé)
    "SHELL_NAV_HOME_TEXT":  [[0,0,0,0,1,0],   "textContent"], // "Home"
    "SHELL_NAV_DASH_TEXT":  [[0,0,0,0,1,1],   "textContent"], // "Dashboard"
    "SHELL_SIDEBAR_FOOTER": [[0,0,0,0,2],     "textContent"], // "© 2025 Admin Demo"
    "SHELL_TOPBAR_BRAND":   [[0,0,1,0,0,0],   "textContent"], // "Admin Dashboard"

    // Links (href)
    "SHELL_NAV_HOME_HREF":  [[0,0,0,0,1,0],   ["attributes","href"]],
    "SHELL_NAV_DASH_HREF":  [[0,0,0,0,1,1],   ["attributes","href"]]
  },

  mapping_values: {
    // Text defaults
    "SHELL_SIDEBAR_TITLE":  "Menu",
    "SHELL_NAV_HOME_TEXT":  "Intro",
    "SHELL_NAV_DASH_TEXT":  "Dashboard",
    "SHELL_SIDEBAR_FOOTER": "© ClientSideAgent",
    "SHELL_TOPBAR_BRAND":   "Carpenter.js",

    // Links defaults
    "SHELL_NAV_HOME_HREF":  "#/home",
    "SHELL_NAV_DASH_HREF":  "#/dashboard"
  }
};