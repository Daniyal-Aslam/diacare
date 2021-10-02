import React from 'react'; 
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
const Header = () => {
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-white">
               <div className="container">
                <NavLink className="navbar-brand" to='/'>
                    <img src={logo} alt="site-logo" />
                </NavLink>  
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <NavLink className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-item nav-link" to="/Feature">Features</NavLink>
                    <NavLink className="nav-item nav-link" to="/Pricing">Pricing</NavLink>
                    <NavLink className="nav-item nav-link" to="/Contact">Contact</NavLink>
                    </div>
                </div>
               </div>
            </nav> 
        </>
    )
}
export default Header;