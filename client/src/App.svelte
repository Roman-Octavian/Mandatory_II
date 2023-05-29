<script>
  import { Route, Router } from 'svelte-navigator'
  import PrivateRoute from "./routes/PrivateRoute.svelte";
  import Authentication from "./pages/authentication/Authentication.svelte";
  import Contact from "./pages/contact/Contact.svelte";
  import Dashboard from "./pages/dashboard/Dashboard.svelte";
</script>

<Router>
  <Route path="/">
    <Authentication />
  </Route>
  <Route path="/contact">
    <Contact />
  </Route>
  <PrivateRoute path="/dashboard" let:location>
    <Dashboard />
  </PrivateRoute>
  
  <Route path="/*">
    <Authentication />
  </Route>
</Router>
