import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Shop from "./pages/shop/shop"
import Cart from "./pages/cart/cart"
import Navbar from './components/navbar';
import ShopContext  from './context/ShopContext';
import Checkout from './pages/checkout';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <ShopContext>
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/ecommerce_website/" element={<Shop />}></Route>
              <Route path="cart" element={<Cart />}></Route>
              <Route path="checkout" element={<Checkout />} />
            </Routes>
            <Link to="/cart"><button className='viewCart'>Cart</button></Link>
          </Router>
        </div>
      </ShopContext>

    </div>
  );
}

export default App;
