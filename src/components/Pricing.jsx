import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import Headcomp from './Headcomp';

 const Pricing = () => {
    return (
        <>
     <Header/>
          <section className="pricing_banner">
              <Headcomp
              head="Pricing page"
              tag="Pricing / Practice Area’s"
            />
        </section>  
     <Footer/>
        </>
    )
}
export default Pricing;
