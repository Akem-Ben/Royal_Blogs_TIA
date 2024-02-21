import React, { useEffect, useState } from "react";
import Navigation from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Button, Card } from "react-bootstrap";
import { convertISOtoDate } from "../../helper functions/helpers";
import user from "../../assets/header/hero/user.png";
import postImage from "../../assets/body/post.png";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import './singlepost.css'
import { useParams } from "react-router-dom";
import { singlePost } from "../../axiosFolder/axiosFunctions/postAxios/postAxios";

export const SinglePost = () => {

    const loggedInUser:any = localStorage.getItem('user')

    const mainUser = JSON.parse(loggedInUser)

    const [loading, setLoading] = useState(false)

    const [viewComments, setViewComments] = useState(false)

    const [getPosts, setGetPosts] = useState<any>({})

    const [postOwner, setPostOwner] = useState<any>({})

    const getIdParams:any = useParams()

    const fetchPostDetails = async()=>{
      try{
        const data = await singlePost(getIdParams.postId)

        setPostOwner(data.data.postOwner)

        console.log(data)

        return setGetPosts(data.data.findPost)

      }catch (error) {
        console.log(error)
      } finally {
        
      }
    }


    const seeComments = () => {
        setViewComments(!viewComments)
    }

    useEffect(()=> {
      fetchPostDetails()
    }, [])
  return (
    <>
      <Navigation />
      <div style={{ marginRight: "15rem", marginLeft: "15rem" }}>
        <Card.Text
          style={{
            backgroundColor: "#4B6BFB",
            fontSize: "11px",
            borderRadius: "5px",
            padding: "5px",
            color: "white",
            width: "4.5rem",
            marginTop: "100px",
          }}
        >
          Technology
        </Card.Text>
        <h1
          style={{
            color: "white",
            marginTop: "10px",
            fontFamily: "sans-serif",
            fontSize: "50px",
          }}
        >
          {getPosts.title}
        </h1>
        <div
          style={{
            fontSize: "10px",
            color: "gray",
            width: "25%",
            marginTop: "1em",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div style={{ display: "flex", width: "150px", gap: "5px" }}>
            <div style={{ width: "2em" }}>
              <Card.Img src={postOwner.profileImage} width="1px" height="2px" style={{borderRadius: '50%'}}/>
            </div>
            <div>{postOwner.fullName}</div>
          </div>
          <div>{convertISOtoDate(getPosts.createdAt)}</div>
        </div>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%", borderRadius: "10px" }}>
            <img
              src={getPosts.postImage}
              width="100%"
              alt="blog picture"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div
            style={{
              marginTop: "30px",
              color: "#A6A6AC",
              fontFamily: "Inter",
              textAlign: "justify",
            }}
          >
            {getPosts.postText}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '50px', marginRight: "15rem", marginLeft: "15rem"}}>
        {viewComments ? (
            <div>
                <div className='show_comments_link' onClick={seeComments}>Hide Comments</div>
                <div style={{overflowY: 'scroll', marginTop: '20px', backgroundColor: 'gray', height: '300px', padding: '20px', borderRadius: '10px'}}>
                    <div style={{ padding: '10px', borderRadius: '10px', border: '1px solid white', marginTop: '10px'}}>
                    <div style={{display: 'flex', gap: '10px'}}>
                    <img src={user} alt='user photo' />
                    <div style={{marginTop: '8px'}}>John Bosco</div>
                    </div>
                    <div>
                        I am unhappy with the way this is treated. Technology requires something better please.
                    </div>
                    <div>

                    </div>
                    </div>
                    <div style={{ padding: '10px', borderRadius: '10px', border: '1px solid white', marginTop: '10px'}}>
                    <div style={{display: 'flex', gap: '10px'}}>
                    <img src={user} alt='user photo' />
                    <div style={{marginTop: '8px'}}>John Bosco</div>
                    </div>
                    <div>
                        I am unhappy with the way this is treated. Technology requires something better please.
                    </div>
                    <div>

                    </div>
                    </div>
                    <div style={{ padding: '10px', borderRadius: '10px', border: '1px solid white', marginTop: '10px'}}>
                    <div style={{display: 'flex', gap: '10px'}}>
                    <img src={user} alt='user photo' />
                    <div style={{marginTop: '8px'}}>John Bosco</div>
                    </div>
                    <div>
                        I am unhappy with the way this is treated. Technology requires something better please.
                    </div>
                    <div>

                    </div>
                    </div>
                    <div style={{ padding: '10px', borderRadius: '10px', border: '1px solid white', marginTop: '10px'}}>
                    <div style={{display: 'flex', gap: '10px'}}>
                    <img src={user} alt='user photo' />
                    <div style={{marginTop: '8px'}}>John Bosco</div>
                    </div>
                    <div>
                        I am unhappy with the way this is treated. Technology requires something better please.
                    </div>
                    <div>

                    </div>
                    </div>
                </div>
            </div>
        ):(
            <div className='show_comments_link' onClick={seeComments}>Show Comments</div>
        )}
      </div>

      {mainUser ? (
      <form style={{ marginRight: "15rem", marginLeft: "15rem", marginTop: '20px' }}>
        <textarea placeholder="Add Comment" style={{backgroundColor: 'gray', padding: '10px', width: '100%', height: '100px', borderRadius: '10px', fontWeight: '400'}} required/>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button type='submit' style={{width: '20%', marginTop: '20px'}}>{loading ? 'Loading...' : 'Add Comment'}</Button>
        </div>
      </form>
      ):(<div style={{ marginRight: "15rem", marginLeft: "15rem", marginTop: '20px', color: "#A6A6AC", fontFamily: 'sans-serif', fontWeight: '600' }}><em>Signin to make a comment</em></div>)}
      <div
        style={{
          display: "flex",
          zIndex: 1000,
          right: 20,
          top: "50%",
          position: "fixed",
          cursor: "pointer",
          width: '100px',
          height: '100px',
          justifyContent: 'space-between',
          marginRight: '10px',
        }}
      >
        <div>
        <AiOutlineLike style={{ width: "30px", height: "30px", color: "white" }} />
        <div style={{color: 'white',  marginLeft: '10px'}}>{getPosts.likes}</div>
        </div>
        <div>
        <AiOutlineDislike style={{ width: "30px", height: "30px", color: "white" }} />
        <div style={{color: 'white', marginLeft: '10px'}}>{getPosts.dislikes}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
