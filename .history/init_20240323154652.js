import { Router } from "https://unpkg.com/@vaadin/router";

import Home from "components/home.js";
import Register from "./components/register.js";

const root = document.getElementById("root");
const router = new Router(root);

router.setRoutes([
  {
    path: "/",
    component: "home-component",
  },
  {
    path: "/register",
    component: "register-component",
  },
]);
