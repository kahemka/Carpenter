# Carpenter
Front-end structure that can be modified programmatically

Carpenter is a tiny, client-side DOM builder with a declarative “blueprint” format, plus a small loader to:
- inject meta tags,
- include CSS and JS libraries,
- and render content blocks into the page.

It lets you describe UI as data and compose pages by mixing multiple configuration files.

## Table of contents
- Features
- Quick start
- The config format (meta/css/js/content)
- The blueprint DSL (DOM structure)
- Mixing multiple configs and anchors
- Optional templating (applyMapping)
- Utilities
- Caveats and best practices

---

## Features
- Declarative DOM construction from a JSON-like blueprint.
- Programmatic injection of <meta>, <link>, and <script> tags.
- Merge multiple configs: CSS/JS arrays are concatenated; content blocks are appended and can target specific anchors.
- Minimal surface area: two classes.
  - Carpenter: low-level builder for DOM nodes.
  - BuildConfig: high-level loader for meta/css/js/content.

---

## Quick start

1) Include Carpenter (local or CDN)
```html
<!-- Local -->
<script src="static/js/Core/carpenter.js"></script>

<!-- Or CDN -->
<!-- <script src="https://cdn.jsdelivr.net/gh/kahemka/Carpenter/static/js/Core/carpenter.js"></script> -->

    Provide your config files as JavaScript that attach globals (e.g. config, config_main_section). Note: although the files are named .json in examples, they must actually be served as JavaScript code:

<script src="static/config/Theme_1/config_online.json"></script>     <!-- defines window.config -->
<script src="static/config/Theme_1/config_test1.json"></script>      <!-- defines window.config_main_section -->

    Bootstrap Carpenter:

<script>
  // Initialize with a list of global config variable names in the order you want to apply them.
  const init = new BuildConfig(["config", "config_main_section"]);

  window.addEventListener("DOMContentLoaded", () => {
    // Recommended order to reduce FOUC and preserve script order:
    init.loadMetaDescription();
    init.loadCssStyle();
    init.loadJsLib();
    init.loadContent();
  });
</script>
```
    Serve files with a static HTTP server to avoid CORS/content-type surprises:

    Python: python -m http.server 8000
    Node (serve): npx serve . Then open http://localhost:8000/Examples/Theme_1/mix.html

The config format
Each config is a JavaScript file that sets a global variable (e.g. config = { ... } or config_main_section = { ... }).
Supported keys:

    meta: object with page metadata
        title: string
        icon: string (favicon URL)
        og: object (Open Graph mapping: title/type/image/description)
    css: array of link tag attributes (objects)
        Example: { "href": "...", "rel": "stylesheet" }
    js: array of script tag attributes (objects)
        Example: { "src": "..." }
    content: blueprint array that describes DOM nodes to render
    content_block_id (optional): id of the element where this config’s content will be injected

Example (simplified):

    config = {
    "meta": {
        "title": "Theme 1 - Frontend Software",
        "icon": "https://img.icons8.com/color/48/maintenance.png",
        "og": {
        "title": "Demo: Theme 1",
        "type": "website",
        "image": "https://imgur.com/0dqdq3ms",
        "description": "Frontend template..."
        }
    },
    "css": [
        { "href": "static/css/Core/bootstrap.min.css", "rel": "stylesheet" },
        { "href": "static/css/Theme_1/main.css", "rel": "stylesheet" }
    ],
    "js": [
        { "src": "static/js/Core/bootstrap.bundle.min.js" },
        { "src": "static/js/Theme_1/main.js" }
    ],
    "content": [
        { "item": "main", "attributes": { "class":"main-wrapper", "id":"main_section" } }
    ]
    }

The blueprint DSL (DOM structure)
A blueprint is an array of node descriptors. Each descriptor:

    item: string (tag name)
    attributes: object (HTML attributes map)
    children: array of node descriptors (recursive)
    text / textContent / value: special properties mapped to DOM element properties

Minimal example:

    [
    {
        "item": "div",
        "attributes": { "class": "container" },
        "children": [
        { "item": "h1", "textContent": "Hello Carpenter" },
        { "item": "p",  "textContent": "This content is declared as data." }
        ]
    }
    ]


This builds:

<div class="container">
  <h1>Hello Carpenter</h1>
  <p>This content is declared as data.</p>
</div>

Notes:

    Use textContent for textual content (preferred). “text” is also supported (useful e.g. for <option> elements where .text is a property).
    No innerHTML is used by Carpenter; to avoid XSS, keep using text/textContent/value.

Mixing multiple configs and anchors
When you instantiate with an array, e.g.:
``
const init = new BuildConfig(["config", "config_main_section"]);
``
Behavior:
    ``
    meta/css/js: concatenated in that order.
    content: each config’s content is appended separately, in sequence.
    content_block_id: if present in a config, that content is injected at document.getElementById(content_block_id). If absent, it is injected into <body>.
    ``
Example pattern:

    First config creates layout shell (sidebar, header, main id="main_section").
    Second config (with "content_block_id": "main_section") injects the page content inside that shell.

Optional templating (applyMapping)
Carpenter ships an experimental method:

    applyMapping(content, template, value)

        content: the blueprint array to modify
        template: map of aliases to [path, property]
            path is an array of indexes to locate a node inside nested children
        value: map of alias -> replacement

Example snippet (from config_test1.json):

    "mapping_template": {
    "title_1":      [[0,0,1], "textContent"],
    "subtitle_1":   [[0,1,0], "textContent"],
    "description_1":[[0,1,1], "textContent"],
    "text_button":  [[0,1,2,0], "textContent"]
    },
    "mapping_values": {
    "title_1": "Carpenter.js",
    "subtitle_1": "Experimental frontend side-project",
    "description_1": "Initially built to display analytics...",
    "text_button": "See documentation"
    }

Note: In the current version, applyMapping is not invoked by default (commented inside loadContent). If you need it, either:

- call it yourself before loadContent, or
- re-enable it in loadContent for your fork.

Utilities
    ``
    killChildren(targetElement)
        Remove all children from the target element (wrapped in try/catch).
    ``
Caveats and best practices

    Dynamic scripts order:
        Dynamically inserted scripts are asynchronous by default; execution order may not be guaranteed.
        Prefer a sequential loader (onload chaining) or set script.async = false via the property (not via setAttribute).
        Alternatively, bundle libraries or rely on modules with known load order.
    File extensions / MIME type:
        The “config_*.json” in examples are JavaScript files defining globals (e.g. config = {...}), not pure JSON.
        Ensure they’re served with text/javascript Content-Type, or rename to .js.
    Load order:
        To avoid FOUC, call: loadMetaDescription() -> loadCssStyle() -> loadJsLib() -> loadContent().
    Security:
        Whitelist attributes where possible; do not pass event handlers via attributes in untrusted inputs.
    Performance (advanced):
        For very large blueprints, consider building into a DocumentFragment then append it once.

API reference (short)
    
    new Carpenter(blueprint = null, target = null, storage = {})
        newBuilds(blueprint?, target?, storage?)
        buildBlueprint(blueprint?, target?)
        linkChild(target, childNode)
        killChildren(target)
    new BuildConfig(name_config = "config" | string[])
        loadMetaDescription()
        loadCssStyle()
        loadJsLib()
        loadContent()
        applyMapping(content, template, value)
    
