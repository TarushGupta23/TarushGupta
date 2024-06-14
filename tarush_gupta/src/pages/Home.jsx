import { useState } from "react";
import Hero from "../components/HeroSection/Hero";
import Journey from "../components/JourneySection/Journey";
import Triangle from "../components/bg-triangle/Triangle";
import Navbar from "../components/navbar/Navbar";
import './home.css'

export default function Home() {
    const [bgColor, setBgColor] = useState(true)

    return (<>
    <Hero />
    <button onClick={() => setBgColor(!bgColor)}>hlo</button>
    <div id="triangles" className={bgColor? 'black':'yello'}>
        <Triangle size='14px' color='red' id='t1'/>
        <Triangle size='24px' color='red' id='t2'/>
        <Triangle size='21px' color='red' id='t3'/>
        <Triangle size='28px' color='red' id='t4'/>
        <Triangle size='18px' color='red' id='t5'/>
        <Triangle size='20px' color='red' id='t6'/>
        <Triangle size='22px' color='red' id='t7'/>
        <Triangle size='27px' color='red' id='t8'/>
        <Triangle size='18px' color='red' id='t9'/>
        <Triangle size='13px' color='red' id='t10'/>
        <Triangle size='15px' color='red' id='t11'/>
        <Triangle size='21px' color='red' id='t12'/>
        <Triangle size='23px' color='red' id='t13'/>
    </div>
    <Navbar />
    <Journey />
    </>)
}