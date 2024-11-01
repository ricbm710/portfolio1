//rrd
import { Route, Routes } from "react-router-dom";
//components
import Layout from "./Layout";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
//utils
import { basePath } from "./utils/basePath";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={basePath} element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="project/:projectName"
            element={<ProjectDetails />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
