import React from 'react'
import Headcomp from './Headcomp';
import contact from '../images/contact.svg';
import Footer from './Footer';
import Header from './Header';

const Contact = () => {
    return (
        <>
        <Header/>
        <section className="contact_section">
            <Headcomp
            head="Contact page"
            tag="Contact / Practice Area’s"
            />
        </section>
            <section className="contac_us">
                <div className="container">
                    <div className="col-lg-6 col-md-12 col-sm-12"> 
                    <div className="contact_content">
                        <img src={contact} alt={contact} />
                    </div>
                    </div>
                </div>
            </section>

        <Footer/>
        </>
    )
}
export default Contact;



