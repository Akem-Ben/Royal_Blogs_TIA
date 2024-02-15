import heroImg from '../../assets/header/hero/hero.png';
import HeroCard from '../Cards/HeroCard';

const HeroSection = () => {

    return (
        <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '80px'}}>
            <div>
        <div style={{position: 'relative'}}>
            <img src={heroImg} alt="Banner Image" />
        </div>
        <div style={{width: '500px', height: '200px', position: 'absolute', top: '30rem', left: "200px"}}>
        <HeroCard />
        </div>
        </div>
        </section>
    )
}

export default HeroSection