import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import ElementDetail from "./pages/ElementDetailPage";
import "./index.css";
import Header from "./components/Header";
import SearchPage from "./pages/SearchPage";
import SettingsPage from "./pages/SettingsPage";
import FavoritesPage from "./pages/FavoritesPage";
import PageNotFound from "./pages/404";
import DownloadPage from "./pages/DownloadPage";
import { useState } from "react";

// ROUTER
function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <>
      <Router>
        <div className="h-screen flex flex-col">
          <Header setIsFilterOpen={setIsFilterOpen} />
          <div className="flex-1 overflow-hidden">
            <Routes>
              <Route path="/" element={<Home isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/element/:symbol" element={<ElementDetail />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
