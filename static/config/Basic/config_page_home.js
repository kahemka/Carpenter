/* global: config_page_home */
config_page_home = {
  content_block_id: "main_home",

  content: [
    {
      item: "div",
      attributes: { class: "row g-4" },
      children: [
        {
          item: "div",
          attributes: { class: "col-12 col-lg-10 col-xl-8" },
          children: [
            {
              item: "div",
              attributes: { class: "card shadow-sm" },
              children: [
                {
                  item: "div",
                  attributes: { class: "card-body" },
                  children: [
                    {
                      item: "h1",
                      attributes: { class: "card-title" },
                      textContent: "Starter template (Home)"
                    },
                    {
                      item: "p",
                      attributes: { class: "text-secondary" },
                      textContent:
                        "Ceci est la page Home (équivalent de base.html) rendue via Carpenter. Utilisez la sidebar pour accéder au Dashboard."
                    },
                    {
                      item: "a",
                      attributes: { class: "btn btn-primary", href: "#/dashboard", "data-route": "dashboard" },
                      textContent: "Voir le Dashboard"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};