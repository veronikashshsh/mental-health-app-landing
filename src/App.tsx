import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/NavBar";
import Career from "./pages/Career";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="font-sans"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
