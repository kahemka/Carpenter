(function () {
  "use strict";

  window.App = window.App || {};

  const state = {
    dashboardRendered: false
  };

  const demo = {
    kpis: {
      revenue: "€ 18,420",
      orders: "1,254",
      customers: "847",
      conversion: "2.8%"
    },
    sales: {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [2400, 2650, 2200, 3100, 4200, 3800, 3270]
    },
    orders: [
      { id: "#10234", customer: "Alice", total: 129.9 },
      { id: "#10233", customer: "Marc", total: 64.5 },
      { id: "#10232", customer: "Sophie", total: 248.0 },
      { id: "#10231", customer: "Jules", total: 41.2 },
      { id: "#10230", customer: "Carla", total: 310.0 }
    ]
  };

  function showSection(key) {
    const home = document.getElementById("main_home");
    const dash = document.getElementById("main_dashboard");
    if (!home || !dash) return;

    if (key === "dashboard") {
      home.classList.add("d-none");
      dash.classList.remove("d-none");
      setActiveLink("dashboard");
      if (!state.dashboardRendered) {
        renderDashboard();
        state.dashboardRendered = true;
      }
    } else {
      // default: home
      dash.classList.add("d-none");
      home.classList.remove("d-none");
      setActiveLink("home");
    }
  }

  function setActiveLink(route) {
    const navHome = document.getElementById("nav-home");
    const navDash = document.getElementById("nav-dashboard");
    if (navHome && navDash) {
      if (route === "dashboard") {
        navHome.classList.remove("active");
        navDash.classList.add("active");
      } else {
        navDash.classList.remove("active");
        navHome.classList.add("active");
      }
    }
  }

  /* Dashboard rendering (KPIs + Plotly + table) */
  function renderDashboard() {
    fillKPIs();
    renderChart();
    fillOrdersTable();
  }

  function fillKPIs() {
    const $rev = document.getElementById("kpi-revenue");
    const $ord = document.getElementById("kpi-orders");
    const $cus = document.getElementById("kpi-customers");
    const $cnv = document.getElementById("kpi-conv");

    if ($rev) $rev.textContent = demo.kpis.revenue;
    if ($ord) $ord.textContent = demo.kpis.orders;
    if ($cus) $cus.textContent = demo.kpis.customers;
    if ($cnv) $cnv.textContent = demo.kpis.conversion;
  }

  function renderChart() {
    const el = document.getElementById("chart-sales");
    if (!el || !window.Plotly) return;

    const trace = {
      x: demo.sales.days,
      y: demo.sales.values,
      type: "scatter",
      mode: "lines+markers",
      line: { color: "#0d6efd", width: 3 },
      marker: { size: 6 },
      hovertemplate: "%{x}<br>%{y:.0f} €<extra></extra>"
    };

    const layout = {
      margin: { l: 40, r: 20, t: 20, b: 40 },
      xaxis: { title: "Day", tickfont: { size: 12 } },
      yaxis: { title: "Sales (€)", tickfont: { size: 12 }, gridcolor: "#f1f3f5" },
      paper_bgcolor: "white",
      plot_bgcolor: "white",
      showlegend: false
    };

    const config = { displayModeBar: false, responsive: true };

    Plotly.newPlot(el, [trace], layout, config);
  }

  function fillOrdersTable() {
    const tbody = document.getElementById("orders-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    const frag = document.createDocumentFragment();
    demo.orders.forEach((o) => {
      const tr = document.createElement("tr");

      const tdId = document.createElement("td");
      tdId.textContent = o.id;

      const tdCustomer = document.createElement("td");
      tdCustomer.textContent = o.customer;

      const tdTotal = document.createElement("td");
      tdTotal.className = "text-end";
      tdTotal.textContent = `€ ${o.total.toFixed(2)}`;

      tr.appendChild(tdId);
      tr.appendChild(tdCustomer);
      tr.appendChild(tdTotal);
      frag.appendChild(tr);
    });
    tbody.appendChild(frag);
  }

  /* Simple hash router (#/home, #/dashboard) */
  function routeFromHash() {
    const hash = (window.location.hash || "#/home").toLowerCase();
    if (hash.includes("dashboard")) return "dashboard";
    return "home";
  }

  function onNavClick(e) {
    const a = e.target.closest("a[data-route]");
    if (!a) return;
    // Let the hash update handle the rendering
  }

  function bindEvents() {
    const sidebar = document.getElementById("sidebar-nav");
    if (sidebar) {
      sidebar.addEventListener("click", onNavClick);
    }
    window.addEventListener("hashchange", () => showSection(routeFromHash()));
  }

  window.App.boot = function () {
    bindEvents();
    showSection(routeFromHash());
  };
})();