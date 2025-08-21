/* global variable expected by Carpenter: config_dashboard */
config_dashboard = {
  content_block_id: "main_section",

  content: [
    /* Row KPI */
    {
      item: "div",
      attributes: { class: "row g-4" },
      children: [
        /* KPI 1 */
        {
          item: "div",
          attributes: { class: "col-12 col-sm-6 col-xl-3" },
          children: [
            {
              item: "div",
              attributes: { class: "card h-100 shadow-sm" },
              children: [
                {
                  item: "div",
                  attributes: { class: "card-body" },
                  children: [
                    { item: "p", attributes: { class: "text-secondary text-uppercase small mb-1" }, textContent: "Revenue" },
                    { item: "h3", attributes: { id: "kpi-revenue", class: "mb-0" }, textContent: "—" },
                    { item: "p", attributes: { class: "text-success small mb-0" }, textContent: "+3.2% vs last week" }
                  ]
                }
              ]
            }
          ]
        },

        /* KPI 2 */
        {
          item: "div",
          attributes: { class: "col-12 col-sm-6 col-xl-3" },
          children: [
            {
              item: "div",
              attributes: { class: "card h-100 shadow-sm" },
              children: [
                {
                  item: "div",
                  attributes: { class: "card-body" },
                  children: [
                    { item: "p", attributes: { class: "text-secondary text-uppercase small mb-1" }, textContent: "Orders" },
                    { item: "h3", attributes: { id: "kpi-orders", class: "mb-0" }, textContent: "—" },
                    { item: "p", attributes: { class: "text-success small mb-0" }, textContent: "+1.1% vs last week" }
                  ]
                }
              ]
            }
          ]
        },

        /* KPI 3 */
        {
          item: "div",
          attributes: { class: "col-12 col-sm-6 col-xl-3" },
          children: [
            {
              item: "div",
              attributes: { class: "card h-100 shadow-sm" },
              children: [
                {
                  item: "div",
                  attributes: { class: "card-body" },
                  children: [
                    { item: "p", attributes: { class: "text-secondary text-uppercase small mb-1" }, textContent: "Customers" },
                    { item: "h3", attributes: { id: "kpi-customers", class: "mb-0" }, textContent: "—" },
                    { item: "p", attributes: { class: "text-danger small mb-0" }, textContent: "-0.4% vs last week" }
                  ]
                }
              ]
            }
          ]
        },

        /* KPI 4 */
        {
          item: "div",
          attributes: { class: "col-12 col-sm-6 col-xl-3" },
          children: [
            {
              item: "div",
              attributes: { class: "card h-100 shadow-sm" },
              children: [
                {
                  item: "div",
                  attributes: { class: "card-body" },
                  children: [
                    { item: "p", attributes: { class: "text-secondary text-uppercase small mb-1" }, textContent: "Conversion" },
                    { item: "h3", attributes: { id: "kpi-conv", class: "mb-0" }, textContent: "—" },
                    { item: "p", attributes: { class: "text-success small mb-0" }, textContent: "+0.2 pts" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* Row chart + table */
    {
      item: "div",
      attributes: { class: "row g-4 mt-1" },
      children: [
        /* Chart */
        {
          item: "div",
          attributes: { class: "col-12 col-xl-8" },
          children: [
            {
              item: "div",
              attributes: { class: "card h-100 shadow-sm" },
              children: [
                { item: "div", attributes: { class: "card-header bg-white" }, children: [{ item: "h5", attributes: { class: "card-title mb-0" }, textContent: "Sales (last 7 days)" }] },
                { item: "div", attributes: { class: "card-body" }, children: [{ item: "div", attributes: { id: "chart-sales", class: "plotly-holder" } }] }
              ]
            }
          ]
        },

        /* Table */
        {
          item: "div",
          attributes: { class: "col-12 col-xl-4" },
          children: [
            {
              item: "div",
              attributes: { class: "card h-100 shadow-sm" },
              children: [
                { item: "div", attributes: { class: "card-header bg-white" }, children: [{ item: "h5", attributes: { class: "card-title mb-0" }, textContent: "Recent orders" }] },
                {
                  item: "div",
                  attributes: { class: "card-body" },
                  children: [
                    {
                      item: "div",
                      attributes: { class: "table-responsive" },
                      children: [
                        {
                          item: "table",
                          attributes: { class: "table align-middle table-sm mb-0" },
                          children: [
                            {
                              item: "thead",
                              attributes: { class: "table-light" },
                              children: [
                                {
                                  item: "tr",
                                  children: [
                                    { item: "th", attributes: { scope: "col" }, textContent: "Order" },
                                    { item: "th", attributes: { scope: "col" }, textContent: "Customer" },
                                    { item: "th", attributes: { scope: "col", class: "text-end" }, textContent: "Total" }
                                  ]
                                }
                              ]
                            },
                            { item: "tbody", attributes: { id: "orders-body" } }
                          ]
                        }
                      ]
                    },
                    { item: "p", attributes: { class: "text-muted small mt-3 mb-0" }, textContent: "Updated just now" }
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