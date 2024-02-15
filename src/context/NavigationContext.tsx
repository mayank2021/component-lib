import { createContext, useContext, useEffect, useState } from "react";
import { NavContextType } from "../Types/NavContextType";
import { Childrenprops } from "../Types/common";

export const NavigationContext = createContext<NavContextType | null>(null);
const path = window.location.pathname;

export const NavigationContextProvider = ({ children }: Childrenprops) => {
  const [currentPath, setCurrentPath] = useState(path);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(path);
    };
    // only triggered when user use back & forward buttons
    window.addEventListener("popstate", handler);

    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationContext);
