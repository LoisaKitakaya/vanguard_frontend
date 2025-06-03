/* @refresh reload */
import { render } from "solid-js/web";
import { MetaProvider } from "@solidjs/meta";
import { Router, Route } from "@solidjs/router";

import "./index.css";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

import App from "./App";
import Home from "./pages/home";

render(
  () => (
    <MetaProvider>
      <Router root={App}>
        <Route path="/" component={Home}></Route>
      </Router>
    </MetaProvider>
  ),
  root
);
