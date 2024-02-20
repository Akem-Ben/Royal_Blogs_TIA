import AdvertBanner from "../../Components/AdvertBanner/Advert";
import Footer from "../../Components/Footer/Footer";
import HeroSection from "../../Components/Header/MainHero";
import Navigation from "../../Components/Navbar/Navbar";
import PostsSection from "../../Components/Posts/PostsSection";
import { FaRegPenToSquare } from "react-icons/fa6";
import "./landing.css";
import { useState } from "react";
import Postmodal from "../../Components/Modals/Postmodal";
import { Col, Container, Row } from "react-bootstrap";

interface PostInitial {
  image: string;
  title: string;
  post: string;
}
const LandingPage = () => {

  const user:any = localStorage.getItem("user")
  const mainUser = JSON.parse(user)


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
    console.log(event.target.value)
    setSavePost({...savePost, post: event.target.value})
  };

  const handlePostTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setSavePost({...savePost, title: event.target.value})
  };

  const handlePost = () => {
    setShowPost([...showPost, savePost])
    setSavePost(initialPost);
    return setShowModal(false);
  };
  return (
    <div>
      <Navigation />
      {!mainUser ? (
      <div style={{backgroundColor: 'red', marginTop: '60px', display: 'flex', justifyContent: 'center'}}>
        <div style={{color: 'white'}}>Signin to be able to make a blog post</div>
      </div>
      ):(null)}
      <HeroSection Posts = {showPost} />

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
          style={{ width: "30px", height: "30px", color: "white" }}
        />
      </div>
       ):(null)}
      <AdvertBanner />
      <PostsSection Prop={showPost}/>
      <AdvertBanner />
      <Footer />
      {/* <Container style={{color: 'red', backgroundColor: 'yellow'}}>
        <Row>
          <Col md={3}>
            Content 1
          </Col>
          <Col md={1}>
            Content 2
          </Col>
          <Col md={3}>
            Content 3
          </Col>
          <Col md={3}>
            Content 4
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            Content 1
          </Col>
          <Col md={3}>
            Content 2
          </Col>
          <Col md={5}>
            Content 3
          </Col>
          <Col md={2}>
            Content 4
          </Col>
        </Row>
      </Container> */}
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
