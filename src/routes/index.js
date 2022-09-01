import { useEffect } from "react";

import { Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { useDrawerContext } from "../context/DrawerContext";

export default function AppRoutes() {
  const { toggleDrawer, drawerOptions, setDrawerOptions } = useDrawerContext();

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
          element={
            <Button variant="contained" color="primary" onClick={toggleDrawer}>
              Toogel Drawer
            </Button>
          }
        />
      </Routes>
    </>
  );
}
