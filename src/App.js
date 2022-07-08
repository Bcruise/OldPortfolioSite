import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Home from "./Home.js";
import { ThemeContext } from "./context";
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import CV from "./components/CV/CV";
import ECommerceSite from "./components/Projects/ecommerce/src/App.js";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Router>
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/ECommerceSite" element={<ECommerceSite />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
