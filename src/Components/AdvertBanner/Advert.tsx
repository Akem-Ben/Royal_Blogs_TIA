import { Card } from "react-bootstrap";
import { useTheme } from "../Contexts/ThemeContext";

const AdvertBanner = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "7em",
        color: "#6A6975",
      }}
    >
      <div
        style={{
          width: "600px",
          display: "flex",
          borderRadius: "50px",
          color: "#6A6975",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            border: `${theme === "light" ? "#E8E8EA" : "#242535"}`,
            borderRadius: "10px",
            backgroundColor: `${theme === "light" ? "#E8E8EA" : "#242535"}`,
            width: "100%",
            display: "flex",
            color: "#6A6975",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Card.Body>
            <Card.Text style={{ fontSize: "12px", fontFamily: "sans-serif" }}>
              Advertisement
            </Card.Text>
            <Card.Subtitle
              style={{ fontWeight: "bolder", fontFamily: "sans-serif" }}
            >
              You can place ads
            </Card.Subtitle>
            <Card.Text style={{ fontFamily: "sans-serif" }}>750x100</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AdvertBanner;
