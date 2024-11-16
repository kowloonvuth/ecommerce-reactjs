import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'
import Sidebar from './components/Sidebar';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ViewCart from "./pages/ViewCart.js";
import CheckOut from "./pages/CheckOut.js";


function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='product/:id' element={<ProductDetails />}/>
          <Route path='/view-cart' element={<ViewCart />}/>
          <Route path='/checkout' element={<CheckOut />}/>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
