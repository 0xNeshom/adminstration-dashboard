import { BrowserRouter as Router ,Route , Routes } from "react-router-dom"
import DashboardPage from './pages/DashboardPage';
import ChartCreationPage from './pages/ChartCreationPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage/>}/>
        <Route path="/create-chart" element={<ChartCreationPage />} />
      </Routes>
    </Router>
  )
}

export default App
