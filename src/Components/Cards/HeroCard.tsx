import {Button, Card} from 'react-bootstrap';
import user from '../../assets/header/hero/user.png'
import { convertISOtoDate } from '../../helper functions/helpers';
import { GrAnalytics } from 'react-icons/gr';

const HeroCard = () => {
  return (
    <Card style={{ width: '25rem', height: '15rem', backgroundColor: '#181A2A', border: '1px solid #1F2134', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem'}}>

      <Card.Body>
        <Card.Text style={{backgroundColor: '#4B6BFB', fontSize: '11px', borderRadius: '5px', padding: '5px', color: 'white', width: '4.5rem'}}>Technology</Card.Text>
        <Card.Title style={{color: 'white', fontSize: '27px', marginTop: '0.5rem'}}>The Impact of Technology on the Workplace: How Technology is Changing</Card.Title>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <div style={{fontSize: '10px', color: 'gray', width: '60%', marginTop: '1em', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '2em'}}>
      <Card.Img src={user} width="1px" height="2px" />
      </div>
      <div>Jason Francisco</div>
      <div>{convertISOtoDate(new Date())}</div>
      </div>
      </Card.Body>
    </Card>
  );
}

export default HeroCard;