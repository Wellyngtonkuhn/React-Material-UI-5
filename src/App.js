import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ThemeProvider } from "@mui/system";
import { LightTheme } from "./themes/Light";

export default function App() {
  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
