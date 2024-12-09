import React from 'react';

function Hero() {
    return (  

        <div className='row ' style={{backgroundColor:"#387ed1", color:"white",width:"100%",paddingBottom:"2rem"}}>

            <div className="col-md-2">

            </div>
        
            <div className="col-md-5 py-md-5 p-5 mt-5 mb-5">
                <h2>Support Portal</h2>
                <p className='mt-5 fs-5 mb-4'>Search for an answer or browse help topics to create a ticket</p>
                <input type="text" className='fs-5 mb-3' name="" id="" style={{ height:"25%", width:"80%", border:"none",paddingLeft:"1rem" }} placeholder='Eg : how do i activate F&O, why is my order getting rejected ?'/>
                <p  className='mt-3 fs-5'><a href="" style={{color:"white", marginRight:".5rem"}} >Track account opening </a>, <a href="" style={{color:"white", marginRight:".5rem"}}>Track segment activation</a><br /> <a href="" style={{color:"white", marginRight:".5rem"}}>Intraday margins Kite user manual</a>.</p>
            </div>

            <div className="col-md-5 py-md-5 p-5 mt-5 mb-5">
            <h3 className=' me-5' style={{textAlign:"end"}}>Track Tickets</h3>
                <p className='mt-5 fs-3 mb-5'>Featured</p>
                <p className='fs-5'>1 . <a href="" className='fs-' style={{color:"white"}} > .Surveillance measure on scrips - December 2024</a></p>
                <p className='fs-5'>2 . <a href="" className='' style={{color:"white"}} > .Surveillance measure on scrips - December 2024</a></p>
            </div>


        </div>

     );
}

export default Hero;