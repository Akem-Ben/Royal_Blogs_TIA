import {Container, Button, InputGroup, Form, Nav, Navbar} from 'react-bootstrap';
import logo from '../../assets/header/navbar/Union.png';
import { CiSearch } from "react-icons/ci";
import './navbar.css'

const Navigation = ()=>{
  return (
    <div style={{top: '0', position:'fixed', zIndex: 100, width:'100%', backgroundColor: '#181A2A'}}>
      <Navbar style={{borderBottom: '1px solid #181A2A', boxShadow: '0 4px 8px rgba(0,0,0,0.4)'}} bg="#181A2A" data-bs-theme="dark">
        <Container style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
            <div style={{}}>
            <Navbar.Brand href="#home">
        <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}

          <span style={{
            fontFamily: 'Inter'
          }}>BeatTech</span> 
          <span style={{
            fontWeight: 800,
          }}>Blog</span>
          </Navbar.Brand>
          </div>
          <div style={{width: '40%'}}>
          <Nav style={{ display: 'flex', justifyContent: 'space-around'}} className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Latest News</Nav.Link>
            <Nav.Link href="#pricing">Pages</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          </div>
          <div>
          <Button variant="success">Signin</Button>{' '}
          {/* <Button variant="success">Login</Button>{' '} */}
          </div>
          <div>
        <InputGroup style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        <InputGroup.Text id="basic-addon1">
          <CiSearch className='search' />
        </InputGroup.Text>
        </InputGroup>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;