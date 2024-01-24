import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

const App = () => {
  return (
    <div className="grid grid-col-2 grid-row-4">
      <div className="row-span-full">
        <Sidebar />
      </div>
      <div className="row-span-full">
        <Route to="/button">
          <ButtonPage />
        </Route>
        <Route to="/accordion">
          <AccordionPage />
        </Route>
        <Route to="/dropdown">
          <DropdownPage />
        </Route>
        <Route to="/modal">
          <ModalPage />
        </Route>
        <Route to="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
};

export default App;
