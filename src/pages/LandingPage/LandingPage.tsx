import AdvertBanner from "../../Components/AdvertBanner/Advert";
import Footer from "../../Components/Footer/Footer";
import HeroSection from "../../Components/Header/MainHero";
import Navigation from "../../Components/Navbar/Navbar";
import PostsSection from "../../Components/Posts/PostsSection";
import { FaRegPenToSquare } from "react-icons/fa6";
import "./landing.css";
import { useEffect, useState } from "react";
import Postmodal from "../../Components/Modals/Postmodal";
import { useBlog } from "../../Components/Contexts/PostContexts";
import { useTheme } from "../../Components/Contexts/ThemeContext";

const LandingPage = () => {
  const userr: any = localStorage.getItem("user");
  const mainUser = JSON.parse(userr);

  const { theme } = useTheme();

  const [showModal, setShowModal] = useState<any>(false);

  const { getPosts } = useBlog();

  const handleModal = () => {
    return setShowModal(true);
  };

  const handleModalClose = () => {
    return setShowModal(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Navigation />
      {!mainUser ? (
        <div
          style={{
            backgroundColor: "red",
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ color: "white" }}>
            Signin to be able to make a blog post
          </div>
        </div>
      ) : null}
      <HeroSection />
      {mainUser ? (
        <div
          onClick={handleModal}
          className="write_icon"
          style={{
            zIndex: 1000,
            right: 20,
            top: "50%",
            position: "fixed",
            cursor: "pointer",
          }}
        >
          <FaRegPenToSquare
            style={{
              width: "30px",
              height: "30px",
              color: `${theme === "light" ? "#181A2A" : "white"}`,
            }}
          />
        </div>
      ) : null}
      <AdvertBanner />
      <PostsSection />
      <AdvertBanner />
      <Footer />({showModal && <Postmodal onClose={handleModalClose} />})
    </div>
  );
};

export default LandingPage;
