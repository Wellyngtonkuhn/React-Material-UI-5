import AppThemeProvider from "./context/AppThemeContext";
import DrawerProvider from "./context/DrawerContext";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import MenuLateral from "./components/menuLateral/MenuLateral";

export default function App() {
  return (
    <>
      <AppThemeProvider>
        <DrawerProvider>
          <BrowserRouter>
            <MenuLateral>
              <AppRoutes />
            </MenuLateral>
          </BrowserRouter>
        </DrawerProvider>
      </AppThemeProvider>
    </>
  );
}
