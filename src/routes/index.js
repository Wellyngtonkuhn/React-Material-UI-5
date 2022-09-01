import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { useDrawerContext } from "../context/DrawerContext";


import DashBoard from "../pages/dashboard/DashBoard";

export default function AppRoutes() {

  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: "home",
        label: "Página inicial",
        to: "/pagina-inicial",
      },
      {
        icon: "users",
        label: "Cadastro",
        to: "/cadastro",
      },
      {
        icon: "login",
        label: "Login",
        to: "/login",
      },
    ]);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/pagina-inicial"
          element={< DashBoard /> }
        />
      </Routes>
    </>
  );
}
