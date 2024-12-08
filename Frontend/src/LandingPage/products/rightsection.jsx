import React from 'react';

function Rightsection({imageurl,title,description,learnmore}) {
    return ( 

        <div className="row mt-5" style={{width:"100%"}}>

            <div className="col-md-1">

            </div>

            <div className="col-md-4 mt-5 p-5">
                <p className='mt-5'></p>
                <h2 className='ps-4 mt-5'>{title}</h2>
                <p style={{textAlign:"left"}} className='mt-3 p-4'>{description}</p>
                <a href={learnmore} className='ps-4' style={{textDecoration:"none"}}>Learnmore <i class="fa-solid fa-arrow-right ms-2"></i></a>
                    
            </div>

            <div className="col-md-5 ms-md-5 ps-3">

            <img src={imageurl} alt="" style={{width:" 90%"}} />
            </div>

        </div>
     );
}

export default Rightsection;