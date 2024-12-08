import React from 'react';

function Team() {
    return ( 
        <>
        <div className="container mt-5">

        <h2 style={{textAlign:"center"}}>People</h2>

        <div className="row mt-5">

            <div className="col-md-4 mt-3 ">

            <img src="/media/images/ceo.jpg" alt="" className='mb-3 me-3' style={{borderRadius:"50%",width:"95%",height:"80%",backgroundSize:"cover"}}/>

            <h5 style={{textAlign:"center"}} className='pt-3' >NISCHAY H R </h5>

            <p className='text-muted' style={{textAlign:"center"}}>Founder, CEO</p>

            </div>

            <div className="col-md-8 mt-5 pl-5">

                <p className='mt-4 px-5 pb-3 fs-5' style={{textAlign:"left"}}>
                Nischay bootstrapped and founded TradeIQ in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, TradeIQ has changed the landscape of the Indian broking industry.
                </p>
                <p className='px-5 pb-3 fs-5' style={{textAlign:"left"}}>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                </p>
                <p className='px-5 pb-3 fs-5' style={{textAlign:"left"}}>
                Playing basketball is his zen.
                </p>
                <p className='px-5 fs-6' style={{textAlign:"left"}}>
                Connect on <a href="/" style={{textDecoration:"none"}}>Homepage </a>/ <a href="https://www.linkedin.com/in/nischayhr" style={{textDecoration:"none"}}>LinkedIn </a>/ <a href="https://www.instagram.com/nischay_achar" style={{textDecoration:"none"}}>Instagram</a> 
                </p>
            </div>

        </div>
        </div>
        </>
     );
}

export default Team;