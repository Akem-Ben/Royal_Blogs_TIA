import { ListGroup, Navbar } from "react-bootstrap";
import './footer.css';
import NewsLetterCard from "../Cards/NewsLetter/Newsletter";
import logo from '../../assets/header/navbar/Union.png'

const Footer = () => {
  return (
    <div style={{bottom: '0', padding: '5rem', marginTop: "5rem", backgroundColor: '#141624', display: 'flex', justifyContent: 'center'}}>
      <div style={{ color: "white", backgroundColor: '#141624', width: '90%'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'column', width: '20rem'}}>
            <div>
             <div>About</div>
              <div style={{color: '#97989F', fontFamily: 'Inter', marginTop: '20px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Adipiscing enim eu turpis egestas pretium. Urna nunc id cursus
                metus aliquam eleifend mi.
              </div>
            </div>
            <br />
            <div>Email:<span style={{color: '#97989F', fontFamily: 'Inter'}}>info@template.com</span></div>
            <div>Phone:<span style={{color: '#97989F', fontFamily: 'Inter'}}>880 123 456 789</span></div>
          </div>
          <div style={{backgroundColor: '#141624'}}>
            <div>Quick Links</div>
            <div className="links" style={{color: '#97989F', fontFamily: 'Inter', display: 'flex', gap: '10px', flexDirection: 'column', marginTop: '20px'}}>
            <ListGroup.Item className="links"><a href="/">Home</a></ListGroup.Item>
            <ListGroup.Item className="links">About</ListGroup.Item>
            <ListGroup.Item className="links">Blogs</ListGroup.Item>
            <ListGroup.Item className="links">Archive</ListGroup.Item>
            <ListGroup.Item className="links">Author</ListGroup.Item>
            <ListGroup.Item className="links">Contact</ListGroup.Item>
            </div>
          </div>
          <div style={{backgroundColor: '#141624'}}>
            <div>Category</div>
            <div style={{color: '#97989F', fontFamily: 'Inter', display: 'flex', gap: '10px', flexDirection: 'column', marginTop: '20px'}}>
            <ListGroup.Item className="links">Lifestyle</ListGroup.Item>
            <ListGroup.Item className="links">Technology</ListGroup.Item>
            <ListGroup.Item className="links">Travel</ListGroup.Item>
            <ListGroup.Item className="links">Business</ListGroup.Item>
            <ListGroup.Item className="links">Economy</ListGroup.Item>
            <ListGroup.Item className="links">Sports</ListGroup.Item>
            </div>
            </div>
          <div style={{width: '30%'}}>
            <NewsLetterCard />
          </div>
        </div>
        <div style={{marginTop: '50px', backgroundColor: '#242535', height: '1px'}}></div>
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
          <div style={{display: 'flex', gap: '10px'}}>
            <div>
            <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            </div>
          <div style={{marginTop: '8px'}}>
            <Navbar.Brand href="/">
            <div>
          <span style={{
            fontFamily: 'Inter'
          }}>BeatTech</span> 
          <span style={{
            fontWeight: 800,
          }}>Blog</span>
          </div>
          <div>
          <span style={{fontFamily: 'Inter', fontSize: '13px'}}>
            BeatTech Blog 2024. All Rights Reserved.
          </span>
          </div>
          </Navbar.Brand>
          </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '350px', fontFamily: 'Inter', marginTop: '25px'}}>
            <div>Terms of use</div>
            <div style={{backgroundColor: '#242535', height: '30px', width: '1px'}}></div>
            <div>Privacy Policy</div>
            <div style={{backgroundColor: '#242535', height: '30px', width: '1px'}}></div>
            <div>Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
