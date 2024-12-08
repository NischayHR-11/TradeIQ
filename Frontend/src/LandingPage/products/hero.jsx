import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5 mb-5' style={{textAlign:"center"}} >
            
            <h2 className='mb-3'>TradeIQ Products</h2>
            <p className='fs-md-4 text-muted'>
            Sleek, modern, and intuitive trading platforms
            </p>
            <p className='fs-6'>
            Check out our <a href="/" style={{textDecoration:"none"}}> investment offerings<i class="fa-solid fa-arrow-right ms-2 fs-6"></i></a>
            </p>
            <hr className='mt-5 mb-5'/>
        </div>
     );
}

export default Hero;