import { Card } from "react-bootstrap";
import { convertISOtoDate } from "../../helper functions/helpers";
import { useNavigate } from "react-router-dom";
import "./PostSection.css";
import { useBlog } from "../Contexts/PostContexts";
import { useTheme } from "../Contexts/ThemeContext";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { FcPrevious, FcNext } from "react-icons/fc";
import { FaRegComments } from "react-icons/fa";

const PostsSection = () => {
  const navigate = useNavigate();
  const { blogPosts } = useBlog();

  const { theme } = useTheme();

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 12;

  const endOffset = itemOffset + itemsPerPage;

  let pageCount: any; 

  blogPosts?.length ? pageCount = Math.ceil(blogPosts.length / itemsPerPage) : null;

  const handlePageChangeClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % blogPosts.length;

    console.log('hi')
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );

    return setItemOffset(newOffset);
  };

  return (
    <div style={{ marginTop: "4rem", marginLeft: "5rem", marginRight: "8rem" }}>
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
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridRowGap: "40px",
            gap: '20px'
          }}
        >
          {blogPosts?.length ? (
            blogPosts
              ?.slice(itemOffset, endOffset)
              ?.map((item: any, index: any) => (
                <Card
                  key={index}
                  style={{
                    width: "310px",
                    height: "450px",
                    padding: "1rem",
                    border: `${
                      theme === "dark"
                        ? "2px solid #242535"
                        : "0.5px solid gray"
                    }`,
                    backgroundColor: `${
                      theme === "light" ? "white" : "#181A2A"
                    }`,
                    fontFamily: "sans-serif",
                  }}
                  onClick={() => navigate(`/singlepost/${item.dataValues.id}`)}
                  className={`${theme === 'light' ? 'post-container-light' : 'post-container-dark'}`}
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
                        width: "96%",
                        height: "96%",
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
                      flexDirection: 'column',
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "80%",
                        justifyContent: "space-between"
                      }}
                    >
                      <div style={{ width: "3em" }}>
                        <Card.Img
                          src={item.ownerImage}
                          style={{ borderRadius: "50%", height: "30px" }}
                        />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-around', width: '90%'}}>
                      <div style={{ marginTop: "7px" }}>{item.ownerName}</div>
                    <div style={{ marginTop: "7px" }}>
                      {convertISOtoDate(item.dataValues.createdAt)}
                    </div>
                    </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "100px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <AiOutlineLike
                          style={{
                            width: "20px",
                            height: "20px",
                            color: `${theme === "light" ? "black" : "white"}`,
                          }}
                        />
                        <div>{item.dataValues.likes}</div>
                      </div>
                      <div>
                        <AiOutlineDislike
                          style={{
                            width: "20px",
                            height: "20px",
                            color: `${theme === "light" ? "black" : "white"}`,
                          }}
                        />
                        <div>{item.dataValues.dislikes}</div>
                      </div>
                      <div>
                      <FaRegComments
                       style={{
                        width: "20px",
                        height: "20px",
                        color: `${theme === "light" ? "black" : "white"}`,
                      }} 
                      />
                      <div>{item.comments.length}</div>
                      </div>
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
        {blogPosts ? (
          blogPosts.length > 12 ? (
            <div
              style={{
                display: "flex",
                marginTop: "50px",
                justifyContent: "center",
              }}
            >
              <ReactPaginate
                breakLabel="..."
                nextLabel={<FcNext />}
                onPageChange={(e: any) => handlePageChangeClick(e)}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<FcPrevious />}
                renderOnZeroPageCount={null}
                marginPagesDisplayed={5}
                breakClassName="break"
                breakLinkClassName="break-link"
                containerClassName="pagination justify-content-center"
                pageClassName="page"
                pageLinkClassName="page-link"
                previousClassName="previous"
                previousLinkClassName="previous-link"
                nextClassName="next"
                nextLinkClassName="next-link"
                activeClassName="active"
                className="paginate"
                // onClick={(e:any)=>handlePageChangeClick(e)}
              />
            </div>
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default PostsSection;
