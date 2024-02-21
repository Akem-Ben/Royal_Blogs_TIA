import { Card } from "react-bootstrap";
import "./postcard.css";
import { convertISOtoDate } from "../../../helper functions/helpers";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface PostProps {
  title: string;
  id: string;
  image: string;
}

function PostsCard({ Data }: { Data: PostProps[] }) {


  useEffect(()=>{
    Data
  }, [])

  const navigate = useNavigate()

  return (
    <>
      {Data ? (
        Data?.map((item: any, index: any) => (
          <Card
            key={index}
            style={{
              width: "360px",
              padding: "1rem",
              border: "2px solid #242535",
              backgroundColor: "#181A2A",
              fontFamily: "sans-serif",
            }}
            onClick={()=> navigate(`/singlepost/${item.dataValues.id}`)}
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
                border: '1px solid #242535'
              }}
            >
              <img
                src={item.dataValues.postImage}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                width: "60%",
                marginTop: "1em",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "2em" }}>
                <Card.Img src={item.ownerImage} width="1px" height="2px" />
              </div>
              <div>{item.ownerName}</div>
              <div>{convertISOtoDate(item.dataValues.createdAt)}</div>
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
