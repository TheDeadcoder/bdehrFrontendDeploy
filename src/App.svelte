<!-- app.svelte -->

<script>
  import Router from "svelte-spa-router";
  import { routes } from "./routes";
</script>

<body>
  <div id="router">
    <Router {routes} />
  </div>
</body>
