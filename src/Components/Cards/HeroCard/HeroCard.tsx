import { Card } from "react-bootstrap";
import { convertISOtoDate } from "../../../helper functions/helpers";
import { useBlog } from "../../Contexts/PostContexts";
import { useTheme } from "../../Contexts/ThemeContext";
import './heroCard.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";

const HeroCard = () => {
  let postToDisplay: any[] = [];

  const { blogPosts } = useBlog();

  const { theme } = useTheme();

  const navigate = useNavigate()

  blogPosts
    ? (postToDisplay = blogPosts.sort(
        (a: any, b: any) => b.dataValues.likes - a.dataValues.likes
      ))
    : null;

  const newPost = postToDisplay[0];

  useEffect(()=>{
    console.log(newPost)
  })

  return (
    <>
      {newPost ? (
        <Card
        className={`hero-card-container ${theme === 'dark' ? 'hero-card-dark': null}`}
          onClick={()=> navigate(`/singlepost/${newPost.dataValues.id}`)}
        >
          <Card.Body>
            <Card.Text className="top-post-tag">
              Top Post
            </Card.Text>
            <Card.Title className={`hero-card-title ${theme === 'dark' ? 'hero-card-title-dark': null}`}>
              {newPost?.dataValues.title?.length > 30
                ? `${newPost.dataValues.title.substring(0, 30)}...`
                : newPost.dataValues.title}
            </Card.Title>
            <div className="hero-card-post-owner">
              <div style={{ width: "2em", marginTop: '10px' }}>
                <Card.Img src={newPost.ownerImage} width="1px" height="2px" />
              </div>
              <div className="post-owner">{newPost.ownerName}</div>
              <div className="post-owner">
                {convertISOtoDate(newPost.dataValues.createdAt)}
              </div>
            </div>
            <div className={`post-analytics-container ${theme === 'dark' ? 'post-analytics-container-dark': null}`}>
                      <div>
                        <AiOutlineLike
                          className={`hero-card-analytic-icon ${theme === 'dark' ? 'hero-card-analytic-icon-dark': null}`}
                        />
                        <div>{newPost.dataValues.likes}</div>
                      </div>
                      <div>
                        <AiOutlineDislike
                          className={`hero-card-analytic-icon ${theme === 'dark' ? 'hero-card-analytic-icon-dark': null}`}
                        />
                        <div>{newPost.dataValues.dislikes}</div>
                      </div>
                      <div>
                      <FaRegComments 
                      className={`hero-card-analytic-icon ${theme === 'dark' ? 'hero-card-analytic-icon-dark': null}`}
                      />
                      <div>{newPost.comments.length}</div>
                      </div>
                    </div>
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
};

export default HeroCard;
