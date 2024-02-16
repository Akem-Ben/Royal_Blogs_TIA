import {Button, Card, InputGroup, Form} from 'react-bootstrap';
import './newsletterCard.css'

function NewsLetterCard() {


  return (
    <Card style={{ backgroundColor: '#242535', width: '22rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
        <div>
        <Card.Title style={{color: 'white'}}>Weekly Newsletter</Card.Title>
        <Card.Text style={{color: '#97989F'}}>
       Get blog articles and offers via email
        </Card.Text>
        </div>
        <div>
        <InputGroup className="mb-3" style={{width: '100%', backgroundColor: '#181A2A', borderRadius: '6px'}}>
        <Form.Control className='input' placeholder="Your Email" style={{backgroundColor: '#181A2A', color: "white", border: '2px solid #262837', width: '100%'}}/>
      </InputGroup>
        <Button style={{width: '100%'}}>Subscribe</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NewsLetterCard;