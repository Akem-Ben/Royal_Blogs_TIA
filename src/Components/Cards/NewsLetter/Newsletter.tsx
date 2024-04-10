import {Button, Card, InputGroup, Form} from 'react-bootstrap';
import './newsletterCard.css'
import { useTheme } from '../../Contexts/ThemeContext';

function NewsLetterCard() {

  const { theme } = useTheme()


  return (
    <Card style={{ backgroundColor: `${theme === 'light' ? 'white' : '#242535'}`, width: '22rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
        <div>
        <Card.Title style={{color: `${theme === 'light' ? '#242535' : 'white'}`}}>Weekly Newsletter</Card.Title>
        <Card.Text style={{color: '#97989F'}}>
       Get blog articles and offers via email
        </Card.Text>
        </div>
        <div>
        <InputGroup className="mb-3" style={{width: '100%', backgroundColor: `${theme === 'light' ? 'white' : '#181A2A'}`, borderRadius: '1px'}}>
        <Form.Control className='input' placeholder="Your Email" style={{backgroundColor: `${theme === 'light' ? 'white' : '#181A2A'}`, color: `${theme === 'light' ? '#181A2A' : 'white'}`, border: '1px solid #262837', width: '100%'}}/>
      </InputGroup>
        <Button style={{width: '100%', color: `${theme === 'light' ? 'black' : 'white'}`}}>Subscribe</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NewsLetterCard;