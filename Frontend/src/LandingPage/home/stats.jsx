import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 mb-5'>
            
            <div className="row mt-5">

                <div className="col-md-5 mt-5 me-5 p-3">
                <h2>Trust with confidence</h2>
                <h4 className='mt-5'>Customer-first always</h4>
                <p className='text-muted'>That's why 1.5+ crore customers trust TradeIQ with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                <h4 className='mt-5'>No spam or gimmicks</h4>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                <h4 className='mt-5'>The TradeIQ universe</h4>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h4 className='mt-5'>Do better with money</h4>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-md-6 ms-md-5 mt-5">
                <img src="/media/images/ecosystem.png" alt=""  style={{width:"90%"}}/>
                <div className="row  mt-3"  style={{marginLeft:"6rem"}}>
                    <div className="col-md-6 mt-2">
                        <a href="#" style={{textDecoration:"none"}}>Explore Our Products <i class="fa-solid fa-arrow-right ms-2"></i></a>
                    </div>
                    <div className="col-md-6 mt-2">
                        <a href="#" style={{textDecoration:"none"}}>Try Kite demo<i class="fa-solid fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;