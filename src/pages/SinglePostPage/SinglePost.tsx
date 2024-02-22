import React, { useEffect, useState } from "react";
import Navigation from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Button, Card } from "react-bootstrap";
import { convertISOtoDate } from "../../helper functions/helpers";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import "./singlepost.css";
import { useParams } from "react-router-dom";
import { singlePost } from "../../axiosFolder/axiosFunctions/postAxios/postAxios";
import { FaRegSmile } from "react-icons/fa";
import {
  createComment,
  getComments,
} from "../../axiosFolder/axiosFunctions/commentsAxios/commentsAxios";
import {
  showErrorToast,
  showSuccessToast,
} from "../../utilities/toastifySetup";
import { disLikePost, getAllDislikes, getAllLikes, likePost } from "../../axiosFolder/axiosFunctions/likesAxios/likesAxios";

import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

export const SinglePost = () => {
  const loggedInUser: any = localStorage.getItem("user");

  const mainUser = JSON.parse(loggedInUser);

  const [loading, setLoading] = useState(false);

  const [viewComments, setViewComments] = useState(false);

  const [getPosts, setGetPosts] = useState<any>({});

  const [postOwner, setPostOwner] = useState<any>({});

  const getIdParams: any = useParams();

  const post_Id = getIdParams.postId;

  const [makeComment, setMakeComment] = useState<any>("");

  const [comments, setComments] = useState<any>([]);

  const [getPostLikes, setGetPostLikes] = useState<any>([])

  const [getPostDislikes, setGetPostDislikes] = useState<any>([])

  const [checkUserLike, setCheckUserLike] = useState(false)

  const [checkUserDislike, setCheckUserDislike] = useState(false)

  const handleCommentsChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setMakeComment(event.target.value);
  };

  const likeAPost = async(event:any)=>{
    try{

      event.preventDefault()

      if(!mainUser){
        return showErrorToast('You must be logged in to be able to like/dislike a post')
      }

      const data = await likePost(post_Id)


      getDisLikes()

      getLikes()

      return fetchPostDetails()

    }catch (error) {
      console.log(error);
    } finally {
    }
  }

  const dislikeAPost = async(event:any)=>{
    try{

      event.preventDefault()

      if(!mainUser){
        return showErrorToast('You must be logged in to be able to like/dislike a post')
      }

      const data = await disLikePost(post_Id)

      getDisLikes()

      getLikes()

      return fetchPostDetails()

    }catch (error) {
      console.log(error);
    } finally {
    }
  }

  const makeComments = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);

      event.preventDefault();

      const commentText = new FormData();

      commentText.append("commentText", makeComment);

      const data = await createComment(commentText, post_Id);

      if (data.status !== 200) {
        setLoading(false);
        return showErrorToast(data.data.message);
      }

      fetchComments();

      setMakeComment("");

      setLoading(false);

      return showSuccessToast(data.data.message);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const fetchPostDetails = async () => {
    try {
      const data = await singlePost(post_Id);

      setPostOwner(data.data.postOwner);

      return setGetPosts(data.data.findPost);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const fetchComments = async () => {
    try {
      const data = await getComments(post_Id);

      return setComments(data.data.commentsWithOwners);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const seeComments = () => {
    setViewComments(!viewComments);
  };

  const getLikes = async() => {
    try {
      const data = await getAllLikes(post_Id);

      const likesArrayStorage = data.data.likesWithOwners

      const dislikesStorageArray = data.data.likesWithOwners

      if(likesArrayStorage.length === 0 && dislikesStorageArray.length === 0){
        setCheckUserLike(false)
        setGetPostLikes(data.data.likesWithOwners)
        return setCheckUserDislike(false)
      }

      likesArrayStorage.map((likes:any)=>{
        if(likes.ownerName === mainUser.fullName){
          return setCheckUserLike(true)
        }
      })

      dislikesStorageArray.map((likes:any)=>{
        if(likes.ownerName === mainUser.fullName){
          return setCheckUserDislike(false)
        }
      })

      return setGetPostLikes(data.data.likesWithOwners)

    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  const getDisLikes = async() => {
    try {
      const data = await getAllDislikes(post_Id);

      const dislikesArrayStorage = data.data.dislikesWithOwners

      const likesArrayStorage = data.data.dislikesWithOwners


      if(likesArrayStorage.length === 0 && dislikesArrayStorage.length === 0){
        setCheckUserLike(false)
        setGetPostDislikes(data.data.likesWithOwners)
        return setCheckUserDislike(false)
      }


      dislikesArrayStorage.map((dislikes:any)=>{
        if(dislikes.ownerName === mainUser.fullName){
          return setCheckUserLike(false)
        }
      })

      likesArrayStorage.map((likes:any)=>{
        if(likes.ownerName === mainUser.fullName){
          return setCheckUserDislike(true)
        }
      })

      return setGetPostDislikes(data.data.dislikesWithOwners)

    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  useEffect(() => {
    fetchPostDetails();
    fetchComments();
    getLikes();
    getDisLikes();
  }, []);
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
              <Card.Img
                src={postOwner.profileImage}
                width="1px"
                height="2px"
                style={{ borderRadius: "50%" }}
              />
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
          <div
            style={{
              width: "90%",
              borderRadius: "10px",
              height: "700px",
              overflowY: "scroll",
            }}
          >
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
      <div
        style={{ marginTop: "50px", marginRight: "15rem", marginLeft: "15rem" }}
      >
        {viewComments ? (
          <div>
            <div className="show_comments_link" onClick={seeComments}>
              Hide Comments
            </div>
            <div
              style={{
                overflowY: "scroll",
                marginTop: "20px",
                backgroundColor: "gray",
                height: "300px",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              {comments.length ? (
                comments.map((comm: any, index: any) => (
                  <div
                    key={index}
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid white",
                      marginTop: "10px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div>
                        <img
                          src={comm.ownerImage}
                          alt="user photo"
                          width="20px"
                          style={{ borderRadius: "50%" }}
                        />
                      </div>
                      <div style={{ marginTop: "2px" }}>{comm.ownerName}</div>
                    </div>
                    <div style={{ marginTop: "2px" }}>{comm.comment}</div>
                    <div></div>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    color: "black",
                    padding: "10px",
                      marginTop: "10px",
                      display: 'flex',
                      justifyContent: "space-around",
                      width: '420px'
                  }}
                >
                  No Comments yet, be the first to make a comment <span style={{marginTop: '4px'}}><FaRegSmile /></span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="show_comments_link" onClick={seeComments}>
            Show Comments
          </div>
        )}
      </div>

      {mainUser ? (
        <form
          style={{
            marginRight: "15rem",
            marginLeft: "15rem",
            marginTop: "20px",
          }}
          onSubmit={makeComments}
        >
          <textarea
            placeholder="Add Comment"
            style={{
              backgroundColor: "gray",
              padding: "10px",
              width: "100%",
              height: "100px",
              borderRadius: "10px",
              fontWeight: "400",
            }}
            required
            onChange={(e: any) => handleCommentsChange(e)}
            value={makeComment}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" style={{ width: "20%", marginTop: "20px" }}>
              {loading ? "Loading..." : "Add Comment"}
            </Button>
          </div>
        </form>
      ) : (
        <div
          style={{
            marginRight: "15rem",
            marginLeft: "15rem",
            marginTop: "20px",
            color: "#A6A6AC",
            fontFamily: "sans-serif",
            fontWeight: "600",
          }}
        >
          <em>Signin to make a comment</em>
        </div>
      )}
      <div
        style={{
          display: "flex",
          zIndex: 1000,
          right: 20,
          top: "50%",
          position: "fixed",
          cursor: "pointer",
          width: "100px",
          height: "100px",
          justifyContent: "space-between",
          marginRight: "10px",
        }}
      >
        <div onClick={likeAPost}>
        {/* <AiFillLike AiOutlineLike <AiFillDislike AiOutlineDislike /> /> */}

        {checkUserLike ? (
           <AiFillLike
           style={{ width: "30px", height: "30px", color: "green"}}
         />
        ):(
          <AiOutlineLike
          style={{ width: "30px", height: "30px", color: "white"}}
        />
        )}
          <div style={{ color: "white", marginLeft: "10px" }}>
            {!getPostLikes ? getPosts.likes : getPostLikes.length}
          </div>
        </div>
        <div onClick={dislikeAPost}>

          {checkUserDislike ? (
            <AiFillDislike
            style={{ width: "30px", height: "30px", color: "green" }}
          />
          ):(
            <AiOutlineDislike
            style={{ width: "30px", height: "30px", color: "white" }}
          />
          )}
          <div style={{ color: "white", marginLeft: "10px" }}>
            {!getPostDislikes ? getPosts.dislikes : getPostDislikes.length}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
