import Home from "./pages/Home"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import React from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import NavMenu from './components/NavMenu'
import Footer from './components/Footer'
import AllProducts from "./components/AllProducts"

function App() {
  return (
    <div className="App"> 
      <Router>
         <Navbar />
         <Cart />
         <NavMenu />
          <Routes>
            <Route exact path="/" element={<Home />}  />
            <Route exact path="/products/:handle" element={<ProductPage />} /> 
            <Route exact path="/products/" element={<AllProducts />}/>
          </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
