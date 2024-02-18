import {Card} from 'react-bootstrap';
import user from '../../../assets/header/hero/user.png'
import { convertISOtoDate } from '../../../helper functions/helpers';

const HeroCard = ({Data}: any) => {
  return (
    <>
    {Data.length ? (
    <Card style={{ width: '25rem', height: '15rem', backgroundColor: '#181A2A', border: '1px solid #1F2134', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem'}}>
      <Card.Body>
        <Card.Text style={{backgroundColor: '#4B6BFB', fontSize: '11px', borderRadius: '5px', padding: '5px', color: 'white', width: '4.5rem'}}>Technology</Card.Text>
        <Card.Title style={{color: 'white', fontSize: '27px', marginTop: '0.5rem'}}>{Data[Data.length - 1].title.length > 77 ? `${Data[Data.length - 1].title.substring(0, 77)}...` : Data[Data.length - 1].title }</Card.Title>
        <div style={{fontSize: '10px', color: 'gray', width: '60%', marginTop: '1em', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '2em'}}>
      <Card.Img src={user} width="1px" height="2px" />
      </div>
      <div>Jason Francisco</div>
      <div>{convertISOtoDate(new Date())}</div>
      </div>
      </Card.Body>
    </Card>
    ) : null}
    </>
  );
}

export default HeroCard;