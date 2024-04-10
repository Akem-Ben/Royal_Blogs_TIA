import { Form, Button, Modal } from "react-bootstrap";
import "./postmodal.css";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useTheme } from "../Contexts/ThemeContext";
import {
  showErrorToast,
  showSuccessToast,
} from "../../utilities/toastifySetup";
import { useBlog } from "../Contexts/PostContexts";
import { useNavigate } from "react-router-dom";

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

  const editorRef: any = useRef(null);

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
            <Modal.Body>
              <Editor
                apiKey="7cs4vxtd2eslppb8dp3p2tu8dtdw6en11luoyzid5e1cvbf5"
                onInit={(evt: any, editor: any) => (editorRef.current = editor)}
                initialValue="<p>Write your text here</p>"
                init={{
                  height: 500,
                  menubar: true,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  setup: (editor) => {
                    editor.on("Change", () => {
                      const content = editor.getContent();
                      handleEditorChange(content);
                    });
                  },
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help |" +
                    "image",
                  images_file_types: "jpg,svg,webp",
                  content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:14px; background-color: ${
                    theme === "light" ? "#E8E8EA" : "#181A2A"
                  }; color: ${theme === "light" ? "#181A2A" : "white"}}`,
                }}
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
