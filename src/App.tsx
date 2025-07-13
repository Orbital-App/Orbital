import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import ElementDetail from "./pages/ElementDetailPage";
import "./index.css";
import Header from "./components/Header";

// ROUTER
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/element/:symbol" element={<ElementDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
