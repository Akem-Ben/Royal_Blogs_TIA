import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const RegisterForm = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', color: 'white', fontFamily: 'Inter'}}>
    <div style={{marginTop: '100px', width: '40%', backgroundColor: '#242535', padding: '30px', borderRadius: '10px'}}>
        <div>
      <Form.Label htmlFor="inputPassword5">Full Name</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        style={{backgroundColor: '#181A2A', color: "white", border: '2px solid #262837'}}
      />
      </div>
      <div>
      <Form.Label htmlFor="inputPassword5" style={{marginTop: '10px'}}>User Name</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        style={{backgroundColor: '#181A2A', color: "white", border: '2px solid #262837'}}
      />
      </div>
      <div>
      <Form.Label htmlFor="inputPassword5" style={{marginTop: '10px'}}>Email</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        style={{backgroundColor: '#181A2A', color: "white", border: '2px solid #262837'}}
      />
      </div>
      <div>
      <Form.Label htmlFor="inputPassword5" style={{marginTop: '10px'}}>Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        style={{backgroundColor: '#181A2A', color: "white", border: '2px solid #262837'}}
      />
      <Form.Text id="passwordHelpBlock" muted>
        <span style={{color: '#97989F'}}>Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.</span>
      </Form.Text>
      </div>
      <br />
      <div>
      <Form.Label htmlFor="inputPassword5" style={{marginTop: '10px'}}>Confirm Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        style={{backgroundColor: '#181A2A', color: "white", border: '2px solid #262837'}}
      />
      </div>
      <Button style={{width: '100%', marginTop: '20px'}}>Register</Button>

      <div style={{fontSize: "13px", marginTop: '20px', fontFamily: 'sans-serif'}}><em><strong>Already Registered? Click <a href="/login" style={{color: 'green'}}>here</a> to login</strong></em></div>
    </div>
    </div>
  );
}

export default RegisterForm