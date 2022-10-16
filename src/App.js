import "./css/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import LandingPage from "./pages/LandingPage";
import Kitchen from "./pages/Kitchen";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App min-h-[100vh] text-white">
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/kitchen" element={<Kitchen />}/>
          </Routes>
        </div>      
      </Router>
    </GlobalProvider>
  );
}

export default App;
