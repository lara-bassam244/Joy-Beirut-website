import Home from '../pages/home-page/Home'
import About from '../pages/About-page/About'
import Bundles from '../pages/Bundles-page/Customization'
import Contact from '../pages/Contact-us/Contact'
import Menu from '../pages/Menu-page/Menu'
import Community from '../pages/Community-page/Community'
import { CartProvider } from "../components/cart-info/CartContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../pages/cart-page/Cart'

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <CartProvider>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/bundles' element={<Bundles />} /> 
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/menu' element={<Menu />} />
            <Route path='/community' element={<Community />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
        </CartProvider>
        </BrowserRouter>
    )
}

export default AppRoutes