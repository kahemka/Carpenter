/* global: config_page_dashboard */
config_page_dashboard = {
  content_block_id: "main_dashboard",

  content: [
    // KPIs row
    {
      item: "div",
      attributes: { class: "row g-4" },
      children: [
        // KPI 1
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
        // KPI 2
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
        // KPI 3
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
        // KPI 4
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

    // Chart + table row
    {
      item: "div",
      attributes: { class: "row g-4 mt-1" },
      children: [
        // Chart col
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
        // Table col
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
  ],

  // Map dashboard texts (corrigés)
  mapping_template: {
    // KPI 1
    "DB_KPI1_LABEL":   [[0,0,0,0,0], "textContent"],
    "DB_KPI1_VALUE":   [[0,0,0,0,1], "textContent"],
    "DB_KPI1_DELTA":   [[0,0,0,0,2], "textContent"],

    // KPI 2
    "DB_KPI2_LABEL":   [[0,1,0,0,0], "textContent"],
    "DB_KPI2_VALUE":   [[0,1,0,0,1], "textContent"],
    "DB_KPI2_DELTA":   [[0,1,0,0,2], "textContent"],

    // KPI 3
    "DB_KPI3_LABEL":   [[0,2,0,0,0], "textContent"],
    "DB_KPI3_VALUE":   [[0,2,0,0,1], "textContent"],
    "DB_KPI3_DELTA":   [[0,2,0,0,2], "textContent"],

    // KPI 4
    "DB_KPI4_LABEL":   [[0,3,0,0,0], "textContent"],
    "DB_KPI4_VALUE":   [[0,3,0,0,1], "textContent"],
    "DB_KPI4_DELTA":   [[0,3,0,0,2], "textContent"],

    // Chart header title
    "DB_CHART_TITLE":  [[1,0,0,0,0],               "textContent"],

    // Table header + columns (corrigés)
    "DB_TABLE_TITLE":  [[1,1,0,0,0],               "textContent"],
    "DB_TABLE_TH_1":   [[1,1,0,1,0,0,0,0,0],       "textContent"], // "Order"
    "DB_TABLE_TH_2":   [[1,1,0,1,0,0,0,0,1],       "textContent"], // "Customer"
    "DB_TABLE_TH_3":   [[1,1,0,1,0,0,0,0,2],       "textContent"], // "Total"

    // Footer note
    "DB_UPDATED_NOTE": [[1,1,0,1,1],               "textContent"]
  },

  mapping_values: {
    "DB_KPI1_LABEL":  "Revenue",
    "DB_KPI1_VALUE":  "—",
    "DB_KPI1_DELTA":  "+3.2% vs last week",

    "DB_KPI2_LABEL":  "Orders",
    "DB_KPI2_VALUE":  "—",
    "DB_KPI2_DELTA":  "+1.1% vs last week",

    "DB_KPI3_LABEL":  "Customers",
    "DB_KPI3_VALUE":  "—",
    "DB_KPI3_DELTA":  "-0.4% vs last week",

    "DB_KPI4_LABEL":  "Conversion",
    "DB_KPI4_VALUE":  "—",
    "DB_KPI4_DELTA":  "+0.2 pts",

    "DB_CHART_TITLE": "Sales (last 7 days)",

    "DB_TABLE_TITLE": "Recent orders",
    "DB_TABLE_TH_1":  "Order",
    "DB_TABLE_TH_2":  "Customer",
    "DB_TABLE_TH_3":  "Total",

    "DB_UPDATED_NOTE": "Updated just now"
  }
};