import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ToggleOffCanvas,
  ToggleTheme,
  ReactToastifyContainer,
} from "./inc/components/commons";
import { RoutePaths } from "./inc/config/routes";
import { Login, Signup } from "./inc/pages/auth";
import { Home } from "./inc/pages/index";

function App() {
  return (
    <div className="app bg-gray-50 dark:bg-gray-900">
      <ToggleTheme />
      <ToggleOffCanvas />
      <ReactToastifyContainer />
      <Router>
        <Routes>
          <Route path={RoutePaths.index} element={<Home />} />
          <Route path={RoutePaths.signup} element={<Signup />} />
          <Route path={RoutePaths.login} element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
