import Home from "./Components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web from "./Components/Web/Web";

import Graphic from "./Components/Graphic/Graphic";
import About from "./Components/About/About";
import Location from "./Components/Location/Location";
import Apps from "./Components/App/Apps";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="web" element={<Web />} />

        <Route path="app" element={<Apps />} />

        <Route path="graphic" element={<Graphic />} />
        <Route path="about" element={<About />} />
        <Route path="location" element={<Location />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
