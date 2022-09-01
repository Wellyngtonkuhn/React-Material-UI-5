import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { Box, ThemeProvider } from "@mui/system";

import { DarkTheme } from "../themes/Dark";
import { LightTheme } from "../themes/Light";

const ThemeContext = createContext({});

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export default function AppThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("light");

  const toggleTheme = useCallback(() => {
    setThemeName((theme) => (theme === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <>
      <ThemeContext.Provider value={{ themeName, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <Box
            width="100vw"
            height="100vh"
            bgcolor={theme.palette.background.default}
          >
            {children}
          </Box>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
