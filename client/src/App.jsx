import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product/:id" element={<Product/>}></Route>
      <Route path="/products/:category" element={<ProductList/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route>
      
      <Route path="/Login" element ={user ? <Navigate to = "/"/>:<Login/>}>
      </Route>
      <Route path="/Register" element={user ? <Navigate to = "/"/>:<Register/>}></Route>
      
    </Routes>
  </Router>
  );
};

export default App;