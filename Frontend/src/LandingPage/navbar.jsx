import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top p-lg-4" style={{height:"10vh",fontSize:"1.1rem"}}>
            
            <div class="container-fluid p-0"> {/* conatiber fuild padding makes gap in left side in mobile view */}
                <Link class="navbar-brand ms-2" to="/"><h2 > TradeIQ</h2></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse bg-light" id="navbarNavAltMarkup" style={{width:"100%"}}>
                <div class="navbar-nav ms-auto mb-2">
                    <Link class="nav-link active me-md-5 ms-2" style={{width:"100%"}} aria-current="page" to="/signup">SignUp</Link>
                    <Link class="nav-link active me-md-5 ms-2" style={{width:"100%"}} to="/about">About</Link>
                    <Link class="nav-link active me-md-5 ms-2" style={{width:"100%"}} to="/products">Products</Link>
                    <Link class="nav-link active me-md-5 ms-2" style={{width:"100%"}} to="/pricing">Pricing</Link>
                    <Link class="nav-link active me-md-5 ms-2" style={{width:"100%"}} to="/support">Support</Link>
                </div>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;