import { useState } from 'react'
import './hero_style.css'

export const Hero = ()=>{

    const [showHero, setShowHero] = useState(true)


    const hide = ()=>{
        setShowHero(false)
    }

    return(
        <>
        {showHero && (
        <div className={`main_container ${!showHero ? 'show' : ''}`}>
        <section className="hero_container">
        <div className='first_container'>
            <div>Unveiling Tomorrow's Tech</div> 
            <div>in Today's World!!</div>
        </div>
        <div className='second_container'>Tech Crib!</div>
        <div className='welcome'>Welcome to the magazine/blog, You deserve the best of real tech in a world filled with substandards</div>
        <div className='btn_container'><button className='btn'>Read Information</button></div>
        </section>
        <section><div onClick={hide} className='delete'>X</div></section>
        </div>
        )}
        </>
    )
}