import { matchRoutes, useLocation } from "react-router-dom";

const routes = [
  { path: "/" },
  { path: "/escatologico" },
  { path: "/isaias" },
  { path: "/jesus" },
];

const usePath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);
  return route.path;
};

export default usePath;
