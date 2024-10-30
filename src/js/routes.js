import HomePage from "../pages/home.svelte";
import SettingsPage from "../pages/settings.svelte";

var routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/settings/",
    component: SettingsPage,
  },
  {
    path: "/settings/:setting/",
    component: SettingsPage,
  },
];

export default routes;
