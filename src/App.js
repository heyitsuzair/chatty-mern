import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToggleTheme } from "./components/commons";
import { RoutePaths } from "./config/routes";
import { Login, Signup } from "./pages/auth";

function App() {
  return (
    <div className="app bg-gray-50 dark:bg-gray-900">
      <ToggleTheme />
      <Router>
        <Routes>
          <Route name="Signup" path={RoutePaths.signup} element={<Signup />} />
          <Route name="Login" path={RoutePaths.login} element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
