import React from 'react';
import Hero from './hero';
import Leftsection from './leftsection';
import Rightsection from './rightsection';
import Universe from './universe';
import Openaccount from '../openaccount';

function Productpage() {
    return ( 
        <>

        <Hero></Hero>

        <Leftsection 
        imageurl={"/media/images/kite.png"} 
        title={"Kite"} 
        description={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}
        demo={"/"}
        learnmore={"/"}
        playstore={"/"}
        appstore={"/"}
        ></Leftsection>

        <Rightsection
        imageurl={"/media/images/console.png"} 
        title={"Console"} 
        description={"The central dashboard for your TradeIQ account. Gain insights into your trades and investments with in-depth reports and visualisations.."}
        learnmore={"/"}
        >
        </Rightsection>

        <Leftsection 
        imageurl={"/media/images/coin.png"} 
        title={"Coin"} 
        description={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}
        demo={"/"}
        learnmore={"/"}
        playstore={"/"}
        appstore={"/"}
        ></Leftsection>

        <Rightsection
        imageurl={"/media/images/kiteconnect.png"} 
        title={"Kite Connect API"} 
        description={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}
        learnmore={"/"}
        >
        </Rightsection>

        <Leftsection 
        imageurl={"/media/images/varsity.png"} 
        title={"Varsity mobile"} 
        description={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}
        demo={"/"}
        learnmore={"/"}
        playstore={"/"}
        appstore={"/"}
        ></Leftsection>

        <Universe></Universe>
        <Openaccount></Openaccount>
        </>
     );
}

export default Productpage;