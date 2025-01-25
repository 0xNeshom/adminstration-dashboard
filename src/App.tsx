import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import DashboardPage from "./pages/DashboardPage";
import ChartCreationPage from "./pages/ChartCreationPage";

const App = () => {
  return (
    <Router>
      <ReactRouterAppProvider>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/create-chart" element={<ChartCreationPage />} />
        </Routes>
      </ReactRouterAppProvider>
    </Router>
  );
};

export default App;
