import "../Styles/App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";
import Welcome from "./Welcome";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>Error page</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
