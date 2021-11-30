 import {useEffect, useState, useRef} from 'react'
 import axios from 'axios'
 import Marquee from "react-fast-marquee";
 import './Listener.css'
 const qr = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 37 37" shape-rendering="crispEdges"><path fill="#ffa500" d="M0 0h37v37H0z"/><path stroke="#000000" d="M4 4.5h7m2 0h1m1 0h1m1 0h1m2 0h1m1 0h3m1 0h7M4 5.5h1m5 0h1m3 0h1m1 0h7m3 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h3m1 0h1m2 0h2m2 0h2m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h2m2 0h4m1 0h1m1 0h1m2 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m1 0h4m2 0h4m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h2m2 0h1m2 0h1m1 0h1m2 0h1m1 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h1m3 0h1m1 0h1m5 0h1M4 12.5h1m1 0h5m2 0h2m2 0h3m1 0h1m1 0h1m2 0h5M4 13.5h1m2 0h2m2 0h1m3 0h2m1 0h1m1 0h9m3 0h1M7 14.5h2m1 0h1m2 0h1m2 0h1m1 0h3m3 0h3M6 15.5h2m5 0h1m6 0h1m6 0h1m1 0h1m1 0h1M5 16.5h4m1 0h3m4 0h2m1 0h3m6 0h2M5 17.5h1m1 0h2m3 0h4m1 0h1m1 0h8m1 0h1m3 0h1M8 18.5h3m1 0h4m1 0h3m1 0h1m4 0h2m1 0h2M4 19.5h2m2 0h2m1 0h1m1 0h1m1 0h2m1 0h1m4 0h1m1 0h4m2 0h1M5 20.5h1m1 0h7m2 0h2m1 0h3m2 0h1m2 0h1m1 0h2M4 21.5h1m1 0h1m1 0h2m1 0h4m2 0h1m2 0h1m1 0h3m1 0h3m1 0h1m1 0h1M4 22.5h1m5 0h1m1 0h3m1 0h5m1 0h1m1 0h2m1 0h1m2 0h1M4 23.5h1m1 0h3m2 0h1m3 0h1m2 0h3m2 0h2m1 0h3m2 0h1M4 24.5h1m1 0h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m2 0h5m1 0h3M12 25.5h1m2 0h3m2 0h1m3 0h1m3 0h5M4 26.5h7m2 0h3m1 0h4m2 0h2m1 0h1m1 0h3M4 27.5h1m5 0h1m1 0h2m2 0h2m1 0h1m2 0h3m3 0h1M4 28.5h1m1 0h3m1 0h1m1 0h5m1 0h1m2 0h1m2 0h5m1 0h3M4 29.5h1m1 0h3m1 0h1m1 0h2m3 0h1m2 0h1m1 0h2m3 0h1m1 0h4M4 30.5h1m1 0h3m1 0h1m1 0h2m1 0h5m6 0h6M4 31.5h1m5 0h1m3 0h2m3 0h2m3 0h1m2 0h1m1 0h1m1 0h1M4 32.5h7m1 0h1m1 0h1m1 0h2m3 0h1m1 0h1m1 0h1m1 0h4"/></svg>

 
const Listener = ({goldValue, setGoldValue, setShowWeightInGold, shouldShow}) => {
    const fetchGoldValue = async () => {
        try {
            const response = await axios.get(`https://weight-in-gold.herokuapp.com/api/v1/weightingold`)
            const data = await response
            setGoldValue(()=>data.data.value)
            console.log('gotten', data.data.value)
        } 
        catch (error) {
           console.log(error)
        }
   }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchGoldValue()
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    useEffect(() => {
        if (goldValue == 0) return
        setShowWeightInGold(true)
    }, [goldValue])

    if (!shouldShow) return <></>
    const display = () => (
        <>
        <div className='body-listener'> 
            <Marquee gradientWidth='0' speed='40'> <div className ="tag">You Are Worth More Than Your Weight In Gold</div></Marquee>
            <div className='footer-wrapper-listener'>
                <div className='QR'>{qr}</div>
                <div className='details-listener'>
                    <span>by Benito Esquenazi</span>
                    <span>Artists Proof</span>
                    <span style={{marginBottom: '7px', fontSize: '13px'}}>November 2021</span>
                    <span style={{fontSize: '12px', fontStyle: 'italic'}}>You Worth More Than Your Weight In Gold &copy;</span>
                    <span className='bottom-tag-listener'>Art-Week Miami 2021</span>
                </div>
            </div>
        </div>
      </>
    )
    return (display())
}

export default Listener