import {
  Container,
  Button,
  InputGroup,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import logo from "../../assets/header/navbar/Union.png";
import { CiSearch } from "react-icons/ci";
import "./navbar.css";
import profile from "../../assets/header/navbar/profile.jpeg";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { useTheme } from "../Contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const user: any = localStorage.getItem("user");
  const mainUser = JSON.parse(user);

  const { theme, toggleThemes } = useTheme();

  const handleTheme = () => {
    toggleThemes();
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    return window.location.href = "/" ;
  };

  const navigate = useNavigate()

  return (
    <div
      style={{
        backgroundColor: `${theme === "light" ? "white" : "#181A2A"}`,
      }}
      className="navbar-container"
    >
      <Navbar
        bg={`${theme === "light" ? "white" : "#181A2A"}`}
        data-bs-theme={`${theme === "light" ? "light" : "dark"}`}
        expand="md"
      >
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{}}>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                style={{ backgroundColor: "black", borderRadius: "50%" }}
                className="d-inline-block align-top"
              />{" "}
              <span
                style={{
                  fontFamily: "Inter",
                }}
              >
                BeatTech
              </span>
              <span
                style={{
                  fontWeight: 800,
                }}
              >
                Blog
              </span>
            </Navbar.Brand>
          </div>

          <div className="menu-items" style={{ width: "40%" }}>
            <Nav
              style={{ display: "flex", justifyContent: "space-around" }}
              className="me-auto"
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#features">Latest News</Nav.Link>
              <Nav.Link href="#pricing">Pages</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
              <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
            </Nav>
          </div>

          <div className="menu-toggle">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {mainUser ? (
                  <>
                    <Button
                      onClick={logout}
                      variant="success"
                      style={{
                        color: `${theme === "light" ? "#181A2A" : "white"}`,
                      }}
                    >
                      Logout
                    </Button>{" "}
                    <Nav.Link href="/profile">
                      <img
                        src={
                          mainUser.profileImage.length
                            ? mainUser.profileImage
                            : profile
                        }
                        width="30px"
                        alt="profile image"
                        style={{ borderRadius: "50%", marginTop: "3px" }}
                      />
                    </Nav.Link>
                  </>
                ) : (
                  <Button
                    onClick={() => navigate('/login')}
                    variant="success"
                    style={{
                      color: `${theme === "light" ? "#181A2A" : "white"}`,
                    }}
                  >
                    Sign in
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>

          <div className="search-bar-section">
            <InputGroup
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="search-input"
                aria-placeholder="hi"
              />
              <InputGroup.Text id="basic-addon1">
                <CiSearch className="search" />
              </InputGroup.Text>
            </InputGroup>
          </div>

          <div className="mode-toggle">
            {theme === "light" ? (
              <BsToggleOff
                style={{ color: "black", height: "40px", width: "50px" }}
                onClick={() => handleTheme()}
              />
            ) : (
              <BsToggleOn
                style={{ color: "white", height: "40px", width: "50px" }}
                onClick={() => handleTheme()}
              />
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
