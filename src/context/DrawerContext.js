import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

const DrawerContext = createContext({});

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export default function DrawerProvider({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((drawer) => !drawer);
  }, []);

  return (
    <>
      <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
        {children}
      </DrawerContext.Provider>
    </>
  );
}
