import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5'>
        
        <div className='row '>

            <div className='col-12' style={{textAlign:"center"}}>

                <img src='/media/images/homeHero.png' style={{width:"100%"}} className='mb-3'></img>
                <h1 className='mt-5 mb-3'>Invest In Everything </h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary mt-3 px-4 py-2'> <h6>SignUp For Free</h6></button>
            </div>
        </div>
        </div>
     );
}

export default Hero;