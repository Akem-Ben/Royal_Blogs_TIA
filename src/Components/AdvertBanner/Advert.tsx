import { Card } from "react-bootstrap";
import { useTheme } from "../Contexts/ThemeContext";
import "./Advert.css";

const AdvertBanner = () => {
  const { theme } = useTheme();

  return (
    <div className="advert-banner-container">
      <div className="advert-banner-sub-container">
        <Card
          className={`advert-banner-card ${
            theme === "dark" ? "advert-dark" : null
          }`}
        >
          <Card.Body>
            <Card.Text className="card-title">Advertisement</Card.Text>
            <Card.Subtitle className="card-subtitle">
              You can place ads
            </Card.Subtitle>
            <Card.Text className="card-text">750x100</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AdvertBanner;
