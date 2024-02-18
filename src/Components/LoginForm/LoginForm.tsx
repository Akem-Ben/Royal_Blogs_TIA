import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', color: 'white', fontFamily: 'Inter'}}>
    <div style={{marginTop: '100px', width: '40%', backgroundColor: '#242535', padding: '30px', borderRadius: '10px'}}>
      <div>
      <Form.Label htmlFor="inputPassword5" style={{marginTop: '10px'}}>Email/Username</Form.Label>
      <Form.Control
        type="text"
        id="inputText"
        aria-describedby="inputText"
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
      </div>
      <Button style={{width: '100%', marginTop: '20px'}}>Login</Button>

      <div style={{fontSize: "13px", marginTop: '20px', fontFamily: 'sans-serif'}}><em><strong>Not Registered? Click <a href="/signup" style={{color: 'green'}}>here</a> to Register</strong></em></div>
    </div>
    </div>
  );
}

export default LoginForm