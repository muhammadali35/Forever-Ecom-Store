import { BrowserRouter , Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Collection from "./pages/Collection/Collection";
import SearchBar from "./components/SearchBar";
import Products from "./components/Products/Products";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Cart from "./pages/Cart";
import PlaceOrder from "./components/PlaceOrder";
import About from "./pages/About/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
       <BrowserRouter>
        <ToastContainer/>
       <NavBar />
       <SearchBar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/collection" element={<Collection/>} />
        <Route path="/product/:id" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/order" element={<Order/>} />
    
      </Routes>
        <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
