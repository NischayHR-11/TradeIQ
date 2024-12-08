import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5 mb-5'>

            <div className="row ">

                <div className="col-4 mt-5">

                <h2>Unbeatable pricing</h2>
                <p className='mt-4'>
                We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                </p>
                <a href="#" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right ms-2"></i></a>
                </div>
                <div className="col-2">
                
                </div>
                <div className=" row col-6 mt-5 mb-5">

                    <div className="col border p-5">
                    <p style={{fontSize:"30px"}}><i class="fa-solid fa-indian-rupee-sign"></i> 0</p>
                    <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className="col border p-5">
                    <p style={{fontSize:"30px"}}><i class="fa-solid fa-indian-rupee-sign"></i> 20</p>
                    <p>Free equity delivery and direct mutual funds</p>
                    </div>
                </div>
            </div>
        
        </div>
     );
}

export default Pricing;