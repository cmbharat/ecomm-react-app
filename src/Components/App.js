import "../Styles/App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<div>Error page</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
