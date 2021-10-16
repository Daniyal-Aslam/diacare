import React from 'react';
import Headcomp from './Headcomp';
import Header from './Header';
import Footer from './Footer';

 const Feature = () => {
    return (
        <> 
     <Header/>
            <section className="feature_banner">
                <Headcomp
                head="Feature page"
                tag="Feature / Practice Area’s"
                />
            </section>
     <Footer/>
        </>
    )
}

export default Feature;
