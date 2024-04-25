import { useFormik } from "formik";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import {
  loginUser,
  resendVerification,
} from "../../axiosFolder/axiosFunctions/userAxios/userAxios";
import {
  showErrorToast,
  showSuccessToast,
} from "../../utilities/toastifySetup";
import { useNavigate } from "react-router-dom";
import "./loginform.css";
import { useTheme } from "../Contexts/ThemeContext";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [checkVerification, setCheckVerification] = useState(false);

  const navigate = useNavigate();

  const { theme } = useTheme();

  const initialFormlikLoginValues = {
    loginKey: "",
    password: "",
  };

  const loginFormik = useFormik({
    initialValues: initialFormlikLoginValues,
    validationSchema: Yup.object({
      loginKey: Yup.string().required("Enter email or username"),
      password: Yup.string()
        .min(8, "Password should be 8 characters or more")
        .required("Enter password"),
    }),

    onSubmit: async (values: any, { setSubmitting }: any) => {
      try {
        setLoading(true);

        const loginForm = new FormData();

        loginForm.append("loginKey", values.loginKey);
        loginForm.append("password", values.password);

        const data = await loginUser(loginForm);

        if (data.status === 401) {
          localStorage.setItem("loginKey", values.loginKey);
          setLoading(false);
          return setCheckVerification(true);
        }

        if (data.status !== 200) {
          setLoading(false);
          return showErrorToast(data.data.message);
        }

        showSuccessToast(data.data.message);

        localStorage.setItem("token", data.data.token);

        localStorage.setItem("user", JSON.stringify(data.data.user));

        values.loginKey = "";
        values.password = "";

        setLoading(false);

        return navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    },
  });
  
  const userResendsVerification = async (event: any) => {
    try {
      event.preventDefault();

      setLoading(true);

      const loginItem: any = localStorage.getItem("loginKey");

      const loginKey = new FormData();

      loginKey.append("loginKey", loginItem);

      const data = await resendVerification(loginKey);

      if (data.status !== 200) {
        setLoading(false);
        return showErrorToast(data.data.message);
      }

      setCheckVerification(false);
      setLoading(false);

      loginFormik.values.loginKey = "";
      loginFormik.values.password = "";

      return showSuccessToast(data.data.message);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

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
        onSubmit={loginFormik.handleSubmit}
      >
        <div>
          <Form.Label htmlFor="inputPassword5" style={{ marginTop: "10px" }}>
            Email/Username
          </Form.Label>
          <Form.Control
            type="text"
            id="loginKey"
            aria-describedby="loginKey"
            name="loginKey"
            value={loginFormik.values.loginKey}
            onChange={loginFormik.handleChange}
            style={{
              backgroundColor: `${theme === "light" ? "#F6F6F8" : "#181A2A"}`,
              color: `${theme === "light" ? "#242535" : "white"}`,
              border: `${
                theme === "light" ? "1px solid #262837" : "2px solid #262837"
              }`,
            }}
          />
          {loginFormik.errors.loginKey ? (
            <div>
              <em style={{ color: "red", fontSize: "12px" }}>
                {loginFormik.errors.loginKey}
              </em>
            </div>
          ) : null}
        </div>
        {checkVerification && (
          <div style={{ fontSize: "12px", marginTop: "15px" }}>
            You cannot login until you verify your account. Check your mail for
            an email with a verification link or{" "}
            <a
              onClick={userResendsVerification}
              className="resend_link"
              style={{ textDecoration: "underline", color: "red" }}
            >
              <em>resend verification link</em>
            </a>
          </div>
        )}
        <div>
          <Form.Label htmlFor="inputPassword5" style={{ marginTop: "15px" }}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            id="password"
            aria-describedby="password"
            value={loginFormik.values.password}
            onChange={loginFormik.handleChange}
            style={{
              backgroundColor: `${theme === "light" ? "#F6F6F8" : "#181A2A"}`,
              color: `${theme === "light" ? "#242535" : "white"}`,
              border: `${
                theme === "light" ? "1px solid #262837" : "2px solid #262837"
              }`,
            }}
          />
          {loginFormik.errors.password ? (
            <div>
              <em style={{ color: "red", fontSize: "12px" }}>
                {loginFormik.errors.password}
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
          {loading ? "Loading..." : "Login"}
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
              Not Registered? Click{" "}
              <span onClick={() => navigate('/signup')} style={{ color: "green" }}>
                here
              </span>{" "}
              to Register
            </strong>
          </em>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
