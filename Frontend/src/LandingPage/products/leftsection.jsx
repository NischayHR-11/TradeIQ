import React from 'react';

function Leftsection({imageurl,title,description,demo,learnmore,playstore,appstore}) {
    return ( 

            <div className="row mt-5" style={{width:"100%"}}>

                <div className="col-md-1">

                </div>

                <div className="col-md-5 mt-3 p-5 me-5">

                <img src={imageurl} alt="" style={{width:" 100%"}} />
                </div>

                <div className="col-md-4 mt-md-5 p-4">

                <h2 className='ps-4 mt-5 pt-5'>{title}</h2>
                <p style={{textAlign:"left"}} className='mt-3 p-4'>{description}</p>
                <p className='ps-4'>
                <p className='row'>
                    <div className="col-lg-4">
                    
                    <a href={demo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right ms-2"></i></a>
                    <br />
                    <a href={playstore}  ><img src="/media/images/googlePlayBadge.svg" alt="" className='mt-3 mb-2' style={{width:"90%"}}/></a>            
                    </div>

                    <div className="col-lg-6">
                    <a href={learnmore} style={{textDecoration:"none"}}>Learnmore <i class="fa-solid fa-arrow-right ms-2"></i></a>
                    <br />
                    <a href={appstore}> <img src="/media/images/appstoreBadge.svg" className='mt-3 mb-2' alt=""  style={{width:"60%"}}/></a>
                    </div>

                </p>

                </p>
                </div>
            </div>
     );
}

export default Leftsection;