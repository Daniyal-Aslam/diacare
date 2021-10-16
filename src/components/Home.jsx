import React from 'react';    
import PracticeCard from './PracticeCard';
import Headcomp from './Headcomp';
import Header from './Header';
import Header from './Footer';
import Datacard from './Datacard';
import CountrySelect from './Countryapi';
 const Home = () => {
    return (
        <>  
     <Header/>
        <section className="web_banner">
            <Headcomp
            head="Home page"
            tag="Home / Practice Area’s"
            />
        </section>
       
        <section className="pratice_card">
                <div className="container">
                    <div className="row">
                        {Datacard.map((val,ind)=>{
                            return(
                                <PracticeCard
                                key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                />
                            )
                        })} 
                    </div> 
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <CountrySelect/>
                        </div>
                    </div>
                </div>
            </section>
      <Footer/>
        </>
    )
}
export default Home;
