import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";
import WheaterDashboard from "./pages/weather-dashboard";
import CityPage from "./pages/city-page";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<WheaterDashboard />} />
            <Route path="/city/:cityName" element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
