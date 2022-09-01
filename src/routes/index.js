import { Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { useAppThemeContext } from "../context/AppThemeContext";

export default function AppRoutes() {
    
  const { toggleTheme } = useAppThemeContext();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Button variant="contained" color="primary" onClick={toggleTheme}>
              Toogel Theme
            </Button>
          }
        />
      </Routes>
    </>
  );
}
