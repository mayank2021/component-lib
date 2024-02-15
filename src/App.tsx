import Route from "./components/Route";
import Layout from "./components/Layout";
import { routes } from "./Data/routes";

const App = () => {
  return (
    <Layout>
      {routes?.map((route) => (
        <Route to={route.to}>
          <route.component />
        </Route>
      ))}
    </Layout>
  );
};

export default App;
