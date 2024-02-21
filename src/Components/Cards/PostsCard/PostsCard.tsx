import { Card } from "react-bootstrap";
import postImg from "../../../assets/body/post.png";
import postImg2 from "../../../assets/body/postimg2.png";
import postImg3 from "../../../assets/body/postimg3.png";
import postImg4 from "../../../assets/body/postimg4.png";
import postImg5 from "../../../assets/body/postimg5.png";
import postImg6 from "../../../assets/body/postimg6.png";
import postImg7 from "../../../assets/body/postimg7.png";
import postImg8 from "../../../assets/body/postimg8.png";
import postImg9 from "../../../assets/body/postimg9.png";
import "./postcard.css";
import user from "../../../assets/header/hero/user.png";
import { convertISOtoDate } from "../../../helper functions/helpers";

interface PostProps {
  title: string;
  id: string;
  image: string;
}

function PostsCard({ Data }: { Data: PostProps[] }) {

  const postPicturesArray = [
    postImg,
    postImg2,
    postImg3,
    postImg4,
    postImg5,
    postImg6,
    postImg7,
    postImg8,
    postImg9
  ];

  return (
    <>
      {Data.length ? (
        Data?.map((item: any, index: any) => (
          <Card
            key={index}
            style={{
              width: "23rem",
              padding: "1rem",
              border: "2px solid #242535",
              backgroundColor: "#181A2A",
              fontFamily: "sans-serif",
            }}
            className="post_container"
          >
            <Card.Img variant="top" src={postPicturesArray[index % postPicturesArray.length]} />
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
                  backgroundColor: "#1E1B34",
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
                  color: "white",
                  fontFamily: "sans-serif",
                  fontSize: "25px",
                  fontWeight: 400,
                }}
              >
                {item.title.length > 77 ? `${item.title.substring(0, 77)}...` : item.title}
              </Card.Title>
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "gray",
                width: "60%",
                marginTop: "1em",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "2em" }}>
                <Card.Img src={user} width="1px" height="2px" />
              </div>
              <div>Jason Francisco</div>
              <div>{convertISOtoDate(new Date())}</div>
            </div>
          </Card>
        ))
      ) : (
        <p
          style={{
            color: "white",
            fontSize: "40px",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
          }}
        >
          No Posts Yet
        </p>
      )}
    </>
  );
}

export default PostsCard;
