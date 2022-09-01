import { createContext, useCallback, useContext, useState } from "react";

const DrawerContext = createContext({});

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export default function DrawerProvider({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState([]);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((drawer) => !drawer);
  }, []);

  return (
    <>
      <DrawerContext.Provider
        value={{ isDrawerOpen, toggleDrawer, drawerOptions, setDrawerOptions }}
      >
        {children}
      </DrawerContext.Provider>
    </>
  );
}
