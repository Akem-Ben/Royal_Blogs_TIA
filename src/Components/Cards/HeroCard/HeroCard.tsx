import { Card } from "react-bootstrap";
import { convertISOtoDate } from "../../../helper functions/helpers";
import { useBlog } from "../../Contexts/PostContexts";
import { useTheme } from "../../Contexts/ThemeContext";
import './heroCard.css';
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      {newPost ? (
        <Card
        className={`${theme === 'light' ? 'hero-card-light' : 'hero-card-dark'}`}
          style={{
            width: "25rem",
            height: "15rem",
            backgroundColor: `${theme === "light" ? "white" : "#181A2A"}`,
            border: `${
              theme === "light" ? "1px solid #E8E8EA" : "1px solid #1F2134"
            }`,
            boxShadow: `${
              theme === "light" ? null : "0 4px 8px rgba(0, 0, 0, 0.1)"
            }`,
            padding: "1rem",
          }}

          onClick={()=> navigate(`/singlepost/${newPost.dataValues.id}`)}
        >
          <Card.Body>
            <Card.Text
              style={{
                backgroundColor: "#4B6BFB",
                fontSize: "11px",
                borderRadius: "5px",
                padding: "5px",
                color: "white",
                width: "4.5rem",
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              Top Post
            </Card.Text>
            <Card.Title
              style={{
                color: `${theme === "light" ? "#181A2A" : "white"}`,
                fontSize: "27px",
                marginTop: "0.5rem",
              }}
            >
              {newPost?.dataValues.title?.length > 60
                ? `${newPost.dataValues.title.substring(0, 60)}...`
                : newPost.dataValues.title}
            </Card.Title>
            <div
              style={{
                fontSize: "10px",
                color: "gray",
                width: "65%",
                marginTop: "1em",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "2em" }}>
                <Card.Img src={newPost.ownerImage} width="1px" height="2px" />
              </div>
              <div style={{ marginTop: "6px" }}>{newPost.ownerName}</div>
              <div style={{ marginTop: "6px" }}>
                {convertISOtoDate(newPost.dataValues.createdAt)}
              </div>
            </div>
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
};

export default HeroCard;
