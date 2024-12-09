import React from 'react';

function Hero() {
    return ( 
        <>
        <div className='conatiner text-center mt-5 mb-5' >

            <h1 style={{marginTop:"5rem", fontSize:"4rem"}}>Charges</h1>
            <p className='mt-3 text-muted fs-3'>List of all charges and taxes</p>
        </div>

        <div className="container mt-5 mb-5">
            
            <div className="row">
                <div className="col-md-4 p-5">
                <img src="/media/images/pricingEquity.svg" alt="" />
                <p className='mt-3 fs-3 text-center'><h2>Free equity delivery</h2></p>
                <p className='mt-3 fs-6 text-center'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-md-4 p-5">
                <img src="/media/images/intradayTrades.svg" alt="" />
                <p className='mt-3 fs-4 text-center'><h2>Intraday and F&O trades</h2></p>
                <p className='mt-3 fs-6 text-center'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-md-4 p-5">
                <img src="/media/images/pricingEquity.svg" alt="" />
                <p className='mt-3 fs-3 text-center'><h2>Free direct MF</h2></p>
                <p className='mt-3 fs-6 text-center'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
        </>
     );
}

export default Hero;