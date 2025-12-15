import { ShoppingCart,CircleUserRound, Menu, X, Search} from 'lucide-react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';
import PopUp from '../pop-up/PopUp';

const navLinks = [
    {label: "Home", path: '/'},
    {label: "Menu", path: '/Menu'},
    {label: "About Us", path: '/About'},
    {label: "Community", path: '/Community'},
    {label: "Florals", path: '/Florals'},
    {label: "Joy Bundles", path: '/Bundles'},
    {label: "Contact Us", path: '/Contact'}

];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const [authMode, setAuthMode] = useState('signin');

    const openSignIn = () => {
        setAuthMode('signin');
        setShowAuth(true);
    };

    return (
        <>
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
                <li className='nav-actions'><Link to="/cart"><ShoppingCart/></Link></li>
                <li className='nav-actions' onClick={openSignIn}><CircleUserRound/></li>
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
         <button
            type="button"
            className="mobile-user-btn"
            onClick={() => {
              setOpen(false);
              openSignIn();
            }}
          >
            <CircleUserRound />
          </button>

        <Link to="/Cart" onClick={() => setOpen(false)}>
          <CircleUserRound />
        </Link>

            </div>
            </nav>
             <PopUp
        isOpen={showAuth}
        mode={authMode}
        onClose={() => setShowAuth(false)}
        onSwitchMode={() =>
          setAuthMode((prev) => (prev === "signin" ? "signup" : "signin"))
        }
      />
        </>
        
    )
}

export default Navbar;