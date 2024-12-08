import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>

            <p className='mt-3 mb-5 fs-3' style={{textAlign:"center"}}>Want to know more about our technology stack? Check out the TradeIQ.tech blog.</p>
            <h1 className='mt-5 mb-3' style={{textAlign:"center"}}>The TradeIQ Universe</h1>
            <p className='mt-5 mb-5 fs-4' style={{textAlign:"center"}}>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row">

                <div className="col-md-4 p-5">
                <img src="/media/images/smallcaseLogo.png" alt="" style={{width:"90%"}} />
                </div>

                <div className="col-md-4 p-5">
                <img src="/media/images/sensibullLogo.svg" alt="" style={{width:"90%"}} />
                </div>

                <div className="col-md-4 p-5">
                <img src="/media/images/streakLogo.png" alt="" style={{width:"90%"}} />
                </div>

            </div>
            <div className="row mt-3">

                <div className="col-md-4 p-5">
                <img src="/media/images/zerodhaFundhouse.png" alt="" style={{width:"90%"}} />
                </div>

                <div className="col-md-4 p-5">
                <img src="/media/images/goldenpiLogo.png" alt="" style={{width:"90%"}} />
                </div>

                <div className="col-md-4 p-5">
                <img src="/media/images/dittoLogo.png" alt="" style={{width:"60%"}} />
                </div>

            </div>
        </div>
     );
}

export default Universe;