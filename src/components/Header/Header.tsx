import { useEffect, useState } from "react";
import { convertISOtoDate } from "../../helper functions/helpers";
import "./header_style.css";
import { FaFireAlt } from "react-icons/fa";

const Header = () => {
    const [currentMessage, setCurrentMessage] = useState(0);
  const date = new Date();
  const main_date = convertISOtoDate(date);

  let messages = [
    "Lorem ipsum dolor sit amet", 
    "consectetur adipiscing elit, sed do eiusmod tempor.", 
    "Fringilla est ullamcorper eget sed elementum tempus.", 
    "Morbi tincidunt augue interdum velit euismod in.", 
    "Eu non diam phasellus vestibulum lorem sed.", 
    "Quis ipsum suspendisse ultrices gravida dictum fusce ut.",
    "Vehicula ipsum a arcu cursus vitae.",
    "Dignissim enim sit amet venenatis urna cursus eget nunc.", 
    "Dignissim cras tincidunt lobortis feugiat.", 
    "Donec enim diam vulputate ut. Iaculis at.", 
    "Mattis pellentesque id nibh tortor id aliquet.", 
    "Massa vitae tortor condimentum lacinia quis vel.", 
    "Diam maecenas sed enim ut sem. Netus et.", 
    "Sagittis eu volutpat odio facilisis mauris sit"
  ]
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setCurrentMessage(randomIndex);
    }, 7000);
    return () => clearInterval(intervalId);
  },[]);


  return (
    <>
      <div className="header_container">
        <section className="first_container">
          <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "1px #000000 solid",
                  borderBottom: "1px #000000 solid",
                  fontSize: "12px",
                  width: "14%"
                }}>{main_date}</div>
          <div className="social_media">
            <div style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderBottom: "1px #000000 solid",
                  width: "40%"
                }}>
                    <div>
                    <span style={{color: "rgb(223, 108, 108)"}}><FaFireAlt /> Hot:</span><span className="messages" style={{marginLeft: "10px", fontSize: "12px", transition: "opacity 10s ease-in-out"}}>{messages[currentMessage]}</span>
              </div>
            </div>
            <div className="social_media_holder">
              <div
                style={{
                    transition: "color 0.5s ease-in-out",
                    height: "100%",
                    color: "white",
                    width: "33.3%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "linear-gradient(to right, rgb(56, 84, 145), rgb(42, 63, 108))"
                }}
                className="social"
              >
                Facebook
              </div>
              <div 
              className="social"
              style={{
                height: "100%",
                width: "33.3%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  background: "linear-gradient(to right, rgb(84, 170, 235), rgb(79, 138, 184))"
                }}>Twitter</div>
              <div 
              className="social"
              style={{
                height: "100%",
                width: "33.3%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  background: "linear-gradient(to right, rgb(233, 84, 101), rgb(230, 50, 70))"
                }}>Pintrest</div>
              <div 
              className="social"
              style={{
                height: "100%",
                width: "33.3%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  background: "linear-gradient(to right, rgb(57, 140, 222), rgb(10, 94, 179))"
                }}>LinkedIn</div>
            </div>
          </div>
        </section>
        <div></div>
      </div>
    </>
  );
};

export default Header;
