import { Link } from "react-router-dom";
import './button.css'


const Button = ({to, children}) => {

    return(
        <Link to={to} className="cta-btn">
            {children}
        </Link>    
    );
}

export default Button;