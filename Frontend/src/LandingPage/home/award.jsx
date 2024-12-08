import React from 'react';

function Award() {
    return ( 
        <div className='container mt-5 mb-5'>

            <div className='row'>

                <div className='col-6 mt-5'>
                
                <img src="/media/images/largestBroker.svg" alt=""/>
                </div>

                <div className='col-5 mt-5'>
                <h2 className='mt-4'>Largest stock broker in India</h2>
                <p className='mt-3 text-muted'>2+ million TradeIQ clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className="row mt-4 mb-3">

                    <ul className='col ms-3'>

                        <li className='mt-3'>
                        Futures and Options
                        </li>
                        <li className='mt-3'>
                        Stocks & IPOS
                        </li>
                        <li className='mt-3'>
                        Commodity derivatives
                        </li> 

                    </ul>

                    <ul className='col'>

                        <li className='mt-3'>
                        Direct mutual funds
                        </li>
                        <li className='mt-3'>
                        Currency derivatives
                        </li>
                        <li className='mt-3'>
                        Bonds And Gov
                        </li>
                    </ul>
                </div>
                <img src="\media\images\pressLogos.png" alt=""  className='mt-3 mb-5'/>
                </div>

            </div>

        </div>
     );
}

export default Award;