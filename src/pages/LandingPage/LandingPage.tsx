import AdvertBanner from "../../Components/AdvertBanner/Advert";
import Footer from "../../Components/Footer/Footer";
import HeroSection from "../../Components/Header/MainHero";
import Navigation from "../../Components/Navbar/Navbar";
import PostsSection from "../../Components/Posts/PostsSection";
import { FaRegPenToSquare } from "react-icons/fa6";
import "./landing.css";
import { useState } from "react";
import Postmodal from "../../Components/Modals/Postmodal";

interface PostInitial {
  image: string;
  title: string;
  post: string;
}
const LandingPage = () => {
  const initialPost: PostInitial = {
    image: "",
    title: "",
    post: "",
  };

  const [showModal, setShowModal] = useState<any>(false);

  const [savePost, setSavePost] = useState<PostInitial>(initialPost);

  const [showPost, setShowPost] = useState<any>([]);

  const handleModal = () => {
    return setShowModal(true);
  };

  const handleModalClose = () => {
    return setShowModal(false);
  };

  const handlePostBodyChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setSavePost({...savePost, post: event.target.value})
  };

  const handlePostTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setSavePost({...savePost, title: event.target.value})
  };

  const handlePost = () => {
    console.log(savePost)
    setShowPost([...showPost, savePost])
    setSavePost(initialPost);
    return setShowModal(false);
  };
  return (
    <div>
      <Navigation />
      <HeroSection Posts = {showPost} />
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
          style={{ width: "30px", height: "30px", color: "white" }}
        />
      </div>
      <AdvertBanner />
      <PostsSection Prop={showPost}/>
      <AdvertBanner />
      <Footer />
      (
      {showModal && (
        <Postmodal
          onClick={handlePost}
          onClose={handleModalClose}
          onChange={handlePostBodyChange}
          titleChange={handlePostTitleChange}
        />
      )}
      )
    </div>
  );
};

export default LandingPage;
