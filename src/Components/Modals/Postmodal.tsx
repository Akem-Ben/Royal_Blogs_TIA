import { Form, Button, Modal } from "react-bootstrap";
import "./postmodal.css";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import React from "react";
import { useTheme } from "../Contexts/ThemeContext";
import {
  showErrorToast,
  showSuccessToast,
} from "../../utilities/toastifySetup";
import { useBlog } from "../Contexts/PostContexts";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";


interface Props {
  onClose: () => void;
}

const Postmodal = (Props: Props) => {
  const { theme } = useTheme();

  const [postImage, setPostImage] = useState<any>("");

  const { addPosts, getPosts } = useBlog();

  const [savePostTitle, setSavePostTitle] = useState("");

  const [postContent, setPostContent] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // const [value, setValue] = useState('');

  // const editorRef: any = useRef(null);

  // const handleEditorData = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

  const handlePostTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setSavePostTitle(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { files } = event.currentTarget;
    const file = files && files[0];
    if (file) {
      setPostImage(file);
    }
  };

  const handleEditorChange = (content: string) => {
    setPostContent(content);
      // Find all images in the content
  const images = document.querySelectorAll('.ql-editor img');
  
  // Iterate over each image
  images.forEach((image) => {
    // Set width, height, and position as needed
    image.setAttribute('style', 'width: 300px; height: 300px; position: relative;');
  });
  };

  const handlePostSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      if (savePostTitle === "") {
        return showErrorToast("Title Required");
      }

      if (postContent === "" || postContent === "Write your text here") {
        return showErrorToast("Post Text Required");
      }

      if (postImage === "") {
        return showErrorToast("Cover Image Required");
      }

      setLoading(true);
      const form = new FormData();

      form.append("title", savePostTitle);
      form.append("postText", postContent);
      form.append("postImage", postImage);

      const data = await addPosts(form);

      if (data.status === 200 || data.status === 201) {
        getPosts();

        setLoading(false);

        setPostImage("");

        setSavePostTitle("");

        setPostContent("");

        showSuccessToast(data.data.message);

        const newPost = data.data.findPost;

        return navigate(`/singlepost/${newPost.id}`);
      } else {
        if (data.status === 405) {
          setLoading(false);
          navigate("/login");
          return showErrorToast(data.data.message);
        }

        if (data.status !== 200) {
          setLoading(false);
          return showErrorToast(data.data.message);
        }

        setLoading(false);
        return showErrorToast(data.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);

      setPostImage("");

      setSavePostTitle("");

      setPostContent("");

      showErrorToast("An unexpected error occurred.");
    }
  };

  return (
    <>
      <div
        className="modal show"
        style={{
          display: "flex",
          position: "fixed",
          justifyContent: "center",
          alignItems: "items",
          alignContent: "center",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: `${theme === "light" ? "#181A2A" : "white"}`,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Modal.Dialog className="custom-modal" style={{ width: "100%" }}>
            <div
              style={{
                marginTop: "10px",
                backgroundColor: `${theme === "light" ? "white" : "#181A2A"}`,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Form.Group className="mb-3" style={{ width: "90%" }}>
                  <Form.Label>Post Title</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={handlePostTitleChange}
                    style={{
                      backgroundColor: `${
                        theme === "light" ? "white" : "#181A2A"
                      }`,
                      color: `${theme === "light" ? "#181A2A" : "white"}`,
                    }}
                    required
                  />
                  <Form.Label style={{ marginTop: "10px" }}>
                    Post Cover Image
                  </Form.Label>
                  <Form.Control
                    type="file"
                    onChange={handleImageChange}
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <Modal.Body style={{}}>
<ReactQuill
        theme="snow"
        value={postContent}
        onChange={handleEditorChange}
          style={{
          width: "100%",
          height: "350px",
          marginBottom: "90px",
          color: `${theme === "light" ? "#181A2A" : "white"}`
        }}
        modules={{
          toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
             {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['color', 'background'], // Added color and background color options
            [{ 'align': [] }],
            ['imageResize', 'imageRotate'], // Added options for image resizing and restructuring
            ['clean']
          ],
        }}
        formats={[
          'header', 'font', 'size',
          'bold', 'italic', 'underline', 'strike', 'blockquote',
          'list', 'bullet', 'indent',
          'link', 'image', 'video',
          'color', 'background',
          'align', // Added formats for text alignment
          'imageResize', 'imageRotate' // Added formats for image resizing and restructuring
        ]}
      />

            </Modal.Body>


            <Modal.Footer
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                className="post_btn"
                onClick={() => {
                  Props.onClose(),
                    setLoading(false),
                    setPostImage(""),
                    setSavePostTitle(""),
                    setPostContent("");
                }}
                style={{ color: `${theme === "light" ? "#181A2A" : "white"}` }}
              >
                Close
              </Button>
              <Button
                className="post_btn"
                onClick={(e: any) => handlePostSubmit(e)}
                style={{ color: `${theme === "light" ? "#181A2A" : "white"}` }}
              >
                {loading ? "Loading..." : "Save Changes"}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    </>
  );
};

export default Postmodal;


