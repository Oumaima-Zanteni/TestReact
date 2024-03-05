import { Home } from "@pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },

  {
    name: "competiotions",
    path: "/competitions",
    element: <Competition />,
  }
];

export default routes;