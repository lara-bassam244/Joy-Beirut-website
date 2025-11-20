import { ShoppingCart,CircleUserRound, Menu, X, Search} from 'lucide-react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

const navLinks = [
    {label: "About Us", path: '/About'},
    {label: "Joy Bundles", path: '/Bundles'},
    {label: "Menu", path: '/Menu'},
    {label: "Contact Us", path: '/Contact'},
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='nav-bar'>
            <div className='nav-container'>
            <img src="/joybeirut.png" alt="joy beirut logo" />

            <ul className='nav-content'>
                {navLinks.map((link) => (
                    <li className='nav-actions' key={link.path}>
                        <Link to={link.path}>{link.label}</Link>
                    </li>
                ))}
                <li className='nav-actions'><Search/></li>
                <li className='nav-actions'><Link to="/Cart"><ShoppingCart/></Link></li>
                <li className='nav-actions'> <Link to="/Cart"><CircleUserRound/></Link></li>
            </ul>

            <button 
            className='burger-btn'
            onClick={() => setOpen(true)} 
            aria-label='open Menu'
            > 
            <Menu size={28} />
            </button>
            </div>

            <div className={`mobile-menu ${open ? "show" : ""}`} >
                <button className='mobile-close'
                onClick={() => setOpen(false)}
                aria-label='close menu'
                >
                 <X size ={28}/>
                </button>

                 {navLinks.map((link) => (
                <Link 
                    key={link.path}
                    to={link.path}
                     onClick={() => setOpen(false)}>{link.label}</Link>
                ))}
         <Link to="/Cart" onClick={() => setOpen(false)}>
          <ShoppingCart />
        </Link>

        <Link to="/Cart" onClick={() => setOpen(false)}>
          <CircleUserRound />
        </Link>

            </div>
        </nav>
    )
}

export default Navbar;