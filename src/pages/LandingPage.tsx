import AdvertBanner from "../Components/AdvertBanner/Advert"
import Footer from "../Components/Footer/Footer"
import HeroSection from "../Components/Header/MainHero"
import Navigation from "../Components/Navbar/Navbar"
import PostsSection from "../Components/Posts/PostsSection"
import { FaRegPenToSquare } from "react-icons/fa6";
import './landing.css'



const LandingPage = ()=>{

    return(
        <div>
        <Navigation />
        <HeroSection />
        <div className="write_icon">
        <FaRegPenToSquare style={{ right: 20, top: '50%', position: 'fixed', width: '30px', height: '30px', color: 'white'}} />
        </div>
        <AdvertBanner />
        <PostsSection />
        <AdvertBanner />
        <Footer />
        </div>
    )
}

export default LandingPage