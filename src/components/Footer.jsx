import React from 'react';
import { NavLink } from 'react-router-dom';
import award from '../images/footer.png';
import logo from '../images/logo-light.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram'; 
 const Footer = () => {
    return (
        <> 
           <footer className="site_footer">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-3 col-md-6 col-sm-12">
                           <div className="footer_content">
                               <h2>About Diacara</h2>
                               <p>Having excellent design and impactful features, Diacara is the Wordpress theme to expose your strong reputation</p>
                               <img src={award} alt={award} />
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-12">
                           <div className="time_content">
                               <h2>Office Opening Hours</h2>
                               <ul>
                                   <li>Monday-----08.00AM-05.00PM</li>
                                    <li>Tuesday----08.00AM-05.00PM</li>
                                    <li>Wednesday---08.00AM-05.00PM</li>
                                    <li>Thursday----08.00AM-05.00PM</li>
                                    <li>Friday----08.00AM-05.00PM</li>
                                    <li>Saturday----08.00AM-05.00PM</li>
                                    <li>Sunday----Closed</li>
                               </ul>
                       </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-12">
                           <div className="address_content">
                               <h6>LAS VEGAS OFFICE</h6>
                               <ul>
                                   <li>5587 S. Eastern Ave.</li>
                                    <li>Suite 123 Las Vegas, Nevada 234668</li>
                                    <li><NavLink to="/">(702) 123-678910</NavLink></li> 
                               </ul>
                       </div>
                           <div className="address_content">
                               <h6>NEW YORK OFFICE</h6>
                               <ul>
                                   <li>5587 S. Eastern Ave.</li>
                                    <li>Suite 123 Las Vegas, Nevada 234668</li>
                                    <li><NavLink to="/">(702) 123-678910</NavLink></li> 
                               </ul>
                       </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-12">
                           <div className="time_content">
                               <h2>Office Opening Hours</h2>
                               <ul>
                                   <li>Monday-----08.00AM-05.00PM</li>
                                    <li>Tuesday----08.00AM-05.00PM</li>
                                    <li>Wednesday---08.00AM-05.00PM</li>
                                    <li>Thursday----08.00AM-05.00PM</li>
                                    <li>Friday----08.00AM-05.00PM</li>
                                    <li>Saturday----08.00AM-05.00PM</li>
                                    <li>Sunday----Closed</li>
                               </ul>
                       </div>
                       </div>
                   </div>
                   <div className="row mt-5 text-center">
                       <div className="col-lg-4 col-md-6 col-sm-12">
                           <p>Diacara - React.js Theme For Law Firm & Attorneys</p>
                        </div>
                       <div className="col-lg-4 col-md-6 col-sm-12">
                           <img src={logo} alt={logo} />
                        </div>
                       <div className="col-lg-4 col-md-6 col-sm-12">
                          <NavLink to="/"> <FacebookRoundedIcon/>  </NavLink>
                          <NavLink to="/"> <TwitterIcon/>  </NavLink>
                          <NavLink to="/"> <GoogleIcon/>  </NavLink>
                          <NavLink to="/"> <InstagramIcon/>  </NavLink>
                        </div>
               </div>
               </div>
            </footer> 
        </>
    )
}
export default Footer;