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
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      rel: "stylesheet"
    },
    {
      href: "../../static/css/Basic/style_mix.css",
      rel: "stylesheet"
    }
  ],

  js: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    },
    {
      src: "https://cdn.plot.ly/plotly-2.31.1.min.js"
    },
    {
      src: "../../static/js/Basic/app_mix.js"
    }
  ],

  /* Layout admin: sidebar + zone principale avec 2 sections (Home/Dashboard) */
  content: [
    {
      item: "div",
      attributes: { class: "container-fluid" },
      children: [
        {
          item: "div",
          attributes: { class: "row flex-nowrap" },
          children: [
            /* Sidebar */
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

            /* Main area with topbar + 2 anchor sections */
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

                /* Sections: main_home (visible) / main_dashboard (hidden) */
                { item: "section", attributes: { id: "main_home", class: "container-fluid py-4" } },
                { item: "section", attributes: { id: "main_dashboard", class: "container-fluid py-4 d-none" } }
              ]
            }
          ]
        }
      ]
    }
  ]
};