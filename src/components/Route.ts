import { RouteTypes } from "../Types/NavContextType";
import { useNavigationContext } from "../context/NavigationContext";

const Route = ({ to, children }: RouteTypes) => {
  const context = useNavigationContext();
  if (to === context?.currentPath) {
    return children;
  }
  return null;
};

export default Route;
