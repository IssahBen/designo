import Home from "./Components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web from "./Components/Web/Web";
import AppDesign from "./Components/App/AppDesign";
import Graphic from "./Components/Graphic/Graphic";
import About from "./Components/About/About";
import Location from "./Components/Location/Location";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="web" element={<Web />} />

        <Route path="app" element={<AppDesign />} />

        <Route path="graphic" element={<Graphic />} />
        <Route path="about" element={<About />} />
        <Route path="location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
