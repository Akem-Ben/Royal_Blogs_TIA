import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../axiosFolder/axiosFunctions/userAxios/userAxios";
import {
  showErrorToast,
  showSuccessToast,
} from "../../utilities/toastifySetup";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Contexts/ThemeContext";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const { theme } = useTheme();

  const navigate = useNavigate();

  const initialFormlikValues = {
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { files } = event.currentTarget;
    console.log(files)
    const file = files && files[0];
    if (file) {
      formik.setFieldValue("image", file);
    }
  };

  const formik = useFormik({
    initialValues: initialFormlikValues,
    validationSchema: Yup.object({
      image: Yup.string().required("Image required"),
      fullName: Yup.string().required("Fullname is required"),
      userName: Yup.string().required("Username is required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Enter password again"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      try {
        setLoading(true);
        let newForm = new FormData();

        newForm.append("profileImage", values.image);
        newForm.append("fullName", values.fullName);
        newForm.append("userName", values.userName);
        newForm.append("password", values.password);
        newForm.append("confirmPassword", values.confirmPassword);
        newForm.append("email", values.email);

        const data = await registerUser(newForm);

        if (data.status !== 200) {

          setLoading(false);
          // formik.setFieldValue("image", "");
          // formik.resetForm()
          // window.location.href = "/signup"
          return showErrorToast(data.data.message);
        }

        showSuccessToast(data.data.message);

        formik.resetForm()

        setLoading(false);

        return navigate("/login");
      } catch (error) {
        console.log(error);
        formik.setFieldValue("image", "");
          formik.resetForm()
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        color: `${theme === "light" ? "#242535" : "white"}`,
        fontFamily: "Inter",
      }}
    >
      <form
        style={{
          marginTop: "100px",
          width: "40%",
          backgroundColor: `${theme === "light" ? "#F6F6F8" : "#242535"}`,
          padding: "30px",
          borderRadius: "10px",
        }}
        onSubmit={formik.handleSubmit}
      >
        <div>
          <Form.Label htmlFor="profileImage">Profile Image</Form.Label>
          <Form.Control
            type="file"
            id="profileImage"
            aria-describedby="profileImage"
            style={{
              backgroundColor: `${theme === "light" ? "#F6F6F8" : "#181A2A"}`,
              color: `${theme === "light" ? "#242535" : "white"}`,
              border: `${
                theme === "light" ? "1px solid #262837" : "2px solid #262837"
              }`,
            }}
            name="profileImage"
            onChange={handleImageChange}
            // value={formik.values.image}
          />
          {formik.errors.image ? (
            <div>
              <em style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.image}
              </em>
            </div>
          ) : null}
        </div>
        <div>
          <Form.Label htmlFor="inputPassword5" style={{ marginTop: "10px" }}>
            Full Name
          </Form.Label>
          <Form.Control
            type="text"
            id="fullName"
            name="fullName"
            value={formik.values.fullName}
            aria-describedby="fullName"
            style={{
              backgroundColor: `${theme === "light" ? "#F6F6F8" : "#181A2A"}`,
              color: `${theme === "light" ? "#242535" : "white"}`,
              border: `${
                theme === "light" ? "1px solid #262837" : "2px solid #262837"
              }`,
            }}
            onChange={formik.handleChange}
          />
          {formik.errors.fullName ? (
            <div>
              <em style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.fullName}
              </em>
            </div>
          ) : null}
        </div>
        <div>
          <Form.Label htmlFor="userName" style={{ marginTop: "10px" }}>
            User Name
          </Form.Label>
          <Form.Control
            type="text"
            id="userName"
            name="userName"
            value={formik.values.userName}
            aria-describedby="userName"
            style={{
              backgroundColor: `${theme === "light" ? "#F6F6F8" : "#181A2A"}`,
              color: `${theme === "light" ? "#242535" : "white"}`,
              border: `${
                theme === "light" ? "1px solid #262837" : "2px solid #262837"
              }`,
            }}
            onChange={formik.handleChange}
          />
          {formik.errors.userName ? (
            <div>
              <em style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.userName}
              </em>
            </div>
          ) : null}
        </div>
        <div>
          <Form.Label htmlFor="inputPassword5" style={{ marginTop: "10px" }}>
            Email
          </Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            aria-describedby="email"
            style={{
              backgroundColor: `${theme === "light" ? "#F6F6F8" : "#181A2A"}`,
              color: `${theme === "light" ? "#242535" : "white"}`,
              border: `${
                theme === "light" ? "1px solid #262837" : "2px solid #262837"
              }`,
            }}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
            <div>
              <em style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.email}
              </em>
            </div>
          ) : null}
        </div>
        <div>
          <Form.Label htmlFor="inputPassword5" style={{ marginTop: "10px" }}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            aria-describedby="password"
            style={{
              backgroundColor: `${theme === "light" ? "#F6F6F8" : "#181A2A"}`,
              color: `${theme === "light" ? "#242535" : "white"}`,
              border: `${
                theme === "light" ? "1px solid #262837" : "2px solid #262837"
              }`,
            }}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <div>
              <em style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.password}
              </em>
            </div>
          ) : null}
          <Form.Text id="passwordHelpBlock" muted>
            <span style={{ color: "#97989F" }}>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </span>
          </Form.Text>
        </div>
        <br />
        <div>
          <Form.Label htmlFor="inputPassword5" style={{ marginTop: "10px" }}>
            Confirm Password
          </Form.Label>
          <Form.Control
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            aria-describedby="confirmPassword"
            style={{
              backgroundColor: `${theme === "light" ? "#F6F6F8" : "#181A2A"}`,
              color: `${theme === "light" ? "#242535" : "white"}`,
              border: `${
                theme === "light" ? "1px solid #262837" : "2px solid #262837"
              }`,
            }}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword ? (
            <div>
              <em style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.confirmPassword}
              </em>
            </div>
          ) : null}
        </div>
        <Button
          type="submit"
          style={{
            width: "100%",
            marginTop: "20px",
            color: `${theme === "light" ? "black" : "white"}`,
          }}
        >
          {loading ? "Loading..." : "Register"}
        </Button>

        <div
          style={{
            fontSize: "13px",
            marginTop: "20px",
            fontFamily: "sans-serif",
          }}
        >
          <em>
            <strong>
              Already Registered? Click{" "}
              <span onClick={() => navigate('/login')} style={{ color: "green" }}>
                here
              </span>{" "}
              to login
            </strong>
          </em>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
