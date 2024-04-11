import { Button, Card } from "react-bootstrap";
import { convertISOtoDate } from "../../helper functions/helpers";
import { useNavigate } from "react-router-dom";
import "./PostSection.css";
import { useBlog } from "../Contexts/PostContexts";
import { useTheme } from "../Contexts/ThemeContext";

const PostsSection = () => {
  const navigate = useNavigate();
  const { blogPosts } = useBlog();

  const { theme } = useTheme();

  return (
    <div style={{ marginTop: "4rem", marginLeft: "8rem", marginRight: "8rem" }}>
      <div>
        <h3
          style={{
            color: `${theme === "light" ? "#181A2A" : "white"}`,
            fontFamily: "sans-serif",
            fontWeight: "bolder",
          }}
        >
          Latest Posts
        </h3>
        <div
          style={{
            display: "grid",
            justifyContent: "space-between",
            marginTop: "20px",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridRowGap: "30px",
          }}
        >
          {blogPosts ? (
            blogPosts?.map((item: any, index: any) => (
              <Card
                key={index}
                style={{
                  width: "360px",
                  padding: "1rem",
                  border: `${
                    theme === "dark" ? "2px solid #242535" : "0.5px solid gray"
                  }`,
                  backgroundColor: `${theme === "light" ? "white" : "#181A2A"}`,
                  fontFamily: "sans-serif",
                }}
                onClick={() => navigate(`/singlepost/${item.dataValues.id}`)}
                className="post_container"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "300px",
                    overflow: "hidden",
                    border: `${
                      theme === "dark" ? "1px solid #242535" : "#E8E8EA"
                    }`,
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={item.dataValues.postImage}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Card.Text
                    style={{
                      backgroundColor: `${
                        theme === "light" ? "#F6F8FF" : "#1E1B34"
                      }`,
                      fontSize: "11px",
                      borderRadius: "5px",
                      padding: "5px",
                      color: "#4B6BFB",
                      width: "4.5rem",
                    }}
                  >
                    Technology
                  </Card.Text>
                  <Card.Title
                    style={{
                      color: `${theme === "light" ? "#181A2A" : "white"}`,
                      fontFamily: "sans-serif",
                      fontSize: "18px",
                      fontWeight: 400,
                    }}
                  >
                    {item.dataValues.title.length > 77
                      ? `${item.dataValues.title.substring(0, 77)}...`
                      : item.dataValues.title}
                  </Card.Title>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "gray",
                    width: "100%",
                    marginTop: "1em",
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "40%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: "3em" }}>
                      <Card.Img
                        src={item.ownerImage}
                        style={{ borderRadius: "50%", height: "30px" }}
                      />
                    </div>
                    <div style={{ marginTop: "7px" }}>{item.ownerName}</div>
                  </div>
                  <div style={{ marginTop: "7px" }}>
                    {convertISOtoDate(item.dataValues.createdAt)}
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <p
              style={{
                fontSize: "40px",
                fontFamily: "sans-serif",
                fontWeight: "bolder",
                color: `${theme === "light" ? "#181A2A" : "white"}`,
              }}
            >
              No Posts Yet
            </p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          {blogPosts ? (
            blogPosts.length > 9 ? (
              <>
                <Button variant="success">Previous Page</Button>
                <Button variant="success">Next Page</Button>
              </>
            ) : null
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
