import React from 'react'; 
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
 const Headcomp = (props) => {
    return (
        <> 
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="web_content">
                            <h1>{props.head}</h1>
                            <small>{props.tag}</small>  
                        </div>
                        <div className="arrow_down"> 
                        <ArrowDownwardTwoToneIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Headcomp;