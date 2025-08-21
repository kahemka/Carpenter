/* global variable expected by Carpenter: config_shell */
config_shell = {
  meta: {
    title: "Simple Dashboard (Carpenter)",
    icon: "https://img.icons8.com/color/48/combo-chart--v1.png",
    og: {
      title: "Simple Dashboard (Carpenter)",
      type: "website",
      image: "https://img.icons8.com/color/96/combo-chart--v1.png",
      description: "Base minimaliste d'un dashboard rendu via Carpenter.js"
    }
  },

  /* CSS libs à injecter dans <head> */
  css: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      rel: "stylesheet"
    },
    {
      href: "../../static/css/Basic/style.css",
      rel: "stylesheet"
    }
  ],

  /* JS libs à injecter dans <head> */
  js: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    },
    {
      src: "https://cdn.plot.ly/plotly-2.31.1.min.js"
    },
    {
      src: "../../static/js/Basic/app.js"
    }
  ],

  /* Layout global: navbar + wrapper + main anchor */
  content: [
    {
      item: "nav",
      attributes: { class: "navbar navbar-expand-lg navbar-dark bg-dark sticky-top" },
      children: [
        {
          item: "div",
          attributes: { class: "container-fluid" },
          children: [
            { item: "a", attributes: { class: "navbar-brand", href: "#" }, textContent: "Simple Dashboard" },
            {
              item: "button",
              attributes: {
                class: "navbar-toggler",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navContent",
                "aria-controls": "navContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation"
              },
              children: [{ item: "span", attributes: { class: "navbar-toggler-icon" } }]
            },
            {
              item: "div",
              attributes: { class: "collapse navbar-collapse", id: "navContent" },
              children: [
                {
                  item: "ul",
                  attributes: { class: "navbar-nav ms-auto" },
                  children: [
                    { item: "li", attributes: { class: "nav-item" }, children: [{ item: "a", attributes: { class: "nav-link active", href: "#", "aria-current": "page" }, textContent: "Overview" }] },
                    { item: "li", attributes: { class: "nav-item" }, children: [{ item: "a", attributes: { class: "nav-link", href: "#" }, textContent: "Reports" }] },
                    { item: "li", attributes: { class: "nav-item" }, children: [{ item: "a", attributes: { class: "nav-link", href: "#" }, textContent: "Settings" }] }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* Wrapper principal avec point d'ancrage pour le contenu du dashboard */
    {
      item: "main",
      attributes: { class: "container-fluid py-4", id: "main_section" }
    },

    /* Footer */
    {
      item: "footer",
      attributes: { class: "container-fluid py-4" },
      children: [
        {
          item: "div",
          attributes: { class: "text-center text-secondary small" },
          textContent: "© 2025 Simple Dashboard — Demo"
        }
      ]
    }
  ]
};