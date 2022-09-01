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
            <Button variant="contained" color="primary" onClick={toggleDrawer}>
              Toogel Theme
            </Button>
          }
        />
      </Routes>
    </>
  );
}
