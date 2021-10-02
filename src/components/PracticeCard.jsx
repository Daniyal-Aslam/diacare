import React from 'react'; 
 const PracticeCard = (props) => {
    return (
        <>
        <div className="col-lg-6 col-md-12 col-sm-12"> 
                    <div className="img_card">
                                    <img src={props.imgsrc} alt={props.imgsrc}/>
                                    <div className="card_content">
                                        <h2>{props.title}</h2>
                                    </div>
                    </div> 
          </div> 
        </>
    )
}
export default PracticeCard;