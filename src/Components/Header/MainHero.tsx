import heroImg from '../../assets/header/hero/hero.png';
import HeroCard from '../Cards/HeroCard/HeroCard';

const HeroSection = () => {

    

    return (
        <section style={{display: 'flex', position: 'relative', zIndex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '80px'}}>
            <div>
        <div>
            <img src={heroImg} alt="Banner Image" />
        </div>
        <div style={{width: '500px', height: '200px', position: 'absolute', top: '25rem', left: "200px"}}>
        <HeroCard />
        </div>
        </div>
        </section>
    )
}

export default HeroSection