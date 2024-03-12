import AdvertBanner from "../../Components/AdvertBanner/Advert";
import Footer from "../../Components/Footer/Footer";
import HeroSection from "../../Components/Header/MainHero";
import Navigation from "../../Components/Navbar/Navbar";
import PostsSection from "../../Components/Posts/PostsSection";
import { FaRegPenToSquare } from "react-icons/fa6";
import "./landing.css";
import { useEffect, useState } from "react";
import Postmodal from "../../Components/Modals/Postmodal";
import { allPosts, createPost } from "../../axiosFolder/axiosFunctions/postAxios/postAxios";
import { showErrorToast, showSuccessToast } from "../../utilities/toastifySetup";

interface PostInitial {
  title: string;
  post: string;
}
const LandingPage = () => {

  // createPost

  const user:any = localStorage.getItem("user")
  const mainUser = JSON.parse(user)


  const initialPost: PostInitial = {
    title: "",
    post: "",
  };

  const [showModal, setShowModal] = useState<any>(false);

  const [savePost, setSavePost] = useState<PostInitial>(initialPost);

  const [showPost, setShowPost] = useState<any>([]);

  const [postImage, setPostImage] = useState<any>("")

  const [loading, setLoading] = useState(false)

  const handleModal = () => {
    return setShowModal(true);
  };

  const handleModalClose = () => {
    setSavePost({
      title: "",
      post: "",
    })
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

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { files } = event.currentTarget;
    const file = files && files[0]
    if(file){
      setPostImage(file)
    }
    };

    const fetchPosts = async() => {
      try {
        const data = await allPosts()
        
        return setShowPost(data.data.postsWithOwners)
  
      }catch (error) {
        console.log(error)
      } finally {
        
      }
    }

  const handlePost = async(event:React.FormEvent<HTMLFormElement>) => {
    try{
      event.preventDefault()

     if(savePost.title === ''){
     return showErrorToast('Title Required')
     }

    if(savePost.post === '' ){
    return showErrorToast('Post Text Required')
     } 

     if(postImage === ''){ 
     return showErrorToast('Cover Image Required')
     }

    setLoading(true)
    const form = new FormData()

    form.append('title', savePost.title)
    form.append('postText', savePost.post)
    form.append('postImage', postImage)

    const data = await createPost(form)

    if(data.status !==200){
      setLoading(false)
      return showErrorToast(data.data.message)
    }
    setPostImage("")

    setSavePost({
      title: "",
      post: "",
    })
    fetchPosts()


    showSuccessToast(data.data.message)


    setLoading(false)

    return setShowModal(false);

    }catch (error) {
      console.log(error)
    } finally {
      
    }
  };


  useEffect(()=>{
    fetchPosts()
  }, [])
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
          imageChange={handleImageChange} 
          loading={loading}
          />
      )}
      )
    </div>
  );
};

export default LandingPage;
