import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function PrivateRoutes() {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  return !user ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace state={{ from: location }} />
  );
}

export default PrivateRoutes;
