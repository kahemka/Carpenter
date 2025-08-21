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
                    { item: "h1", attributes: { class: "card-title" }, textContent: "Starter template (Home)" },
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
  ],

  // Map texts + the button href
  mapping_template: {
    "HOME_TITLE":        [[0,0,0,0,0], "textContent"],              // H1
    "HOME_DESCRIPTION":  [[0,0,0,0,1], "textContent"],              // paragraph
    "HOME_BUTTON_TEXT":  [[0,0,0,0,2], "textContent"],              // button label
    "HOME_BUTTON_HREF":  [[0,0,0,0,2], ["attributes","href"]]       // button href
  },

  mapping_values: {
    "HOME_TITLE":        "Experimental frontend side-project",
    "HOME_DESCRIPTION":  "Initially built to display analytics on html pages in a programmatic way so its results can be easily automated, updated or customized, this library is now used as a Document Object Model management structure to help build reusable frontend templates.",
    "HOME_BUTTON_TEXT":  "See documentation",
    "HOME_BUTTON_HREF":  "https://github.com/kahemka/Carpenter"
  }
};