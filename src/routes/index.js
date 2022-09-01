import { Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { useDrawerContext } from "../context/DrawerContext";

export default function AppRoutes() {
  const { toggleDrawer } = useDrawerContext();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <p>TEtse</p>
          }
        />
      </Routes>
    </>
  );
}
