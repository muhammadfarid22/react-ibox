import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent"
import HomePage from "./pages/HomePage"
import FaqPage from "./pages/FaqPage"
import PrivasiPage from "./pages/PrivasiPage"
import TentangKamiPage from "./pages/TentangKamiPage"

function App() {
 return (
  <div>
    <NavbarComponent />
    <Routes>
      <Route path="/homepage" Component={HomePage} />
      <Route path="/faq" Component={FaqPage} />
      <Route path="/privasi" Component={PrivasiPage} />
      <Route path="/tentangkami" Component={TentangKamiPage} />
    </Routes>
    
    <FooterComponent />
  </div>  
 );
}

export default App
