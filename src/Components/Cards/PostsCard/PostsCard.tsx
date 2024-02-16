import {Card} from 'react-bootstrap';
import postImg from '../../../assets/body/post.png'
import './postcard.css'
import user from '../../../assets/header/hero/user.png'
import { convertISOtoDate } from '../../../helper functions/helpers';


function PostsCard() {
  return (
    <Card style={{ width: '23rem', padding: '1rem', border: '2px solid #242535', backgroundColor: '#181A2A', fontFamily: 'sans-serif' }} className='post_container'>
      <Card.Img variant="top" src={postImg} />
      <div style={{marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <Card.Text style={{backgroundColor: '#1E1B34', fontSize: '11px', borderRadius: '5px', padding: '5px', color: '#4B6BFB', width: '4.5rem'}}>Technology</Card.Text>
        <Card.Title style={{color: 'white', fontFamily: 'sans-serif', fontSize: '25px', fontWeight: 400 }}>The Impact of Technology on the Workplace: How Technology is Changing</Card.Title>
        </div>
        <div style={{fontSize: '10px', color: 'gray', width: '60%', marginTop: '1em', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '2em'}}>
      <Card.Img src={user} width="1px" height="2px" />
      </div>
      <div>Jason Francisco</div>
      <div>{convertISOtoDate(new Date())}</div>
      </div>
    </Card>
  );
}

export default PostsCard;