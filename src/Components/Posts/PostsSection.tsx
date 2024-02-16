import { Button } from "react-bootstrap"
import PostsCard from "../Cards/PostsCard/PostsCard"


const PostsSection = () => {

    return (
        <div style={{marginTop: '4rem', marginLeft: '8rem', marginRight: '8rem'}}>
        <div>
            <h3 style={{color: 'white', fontFamily: 'sans-serif', fontWeight: 'bolder'}}>Latest Posts</h3>
            <div style={{display: 'grid', justifyContent: 'space-between', marginTop: '20px', gridTemplateColumns: '1fr 1fr 1fr', gridRowGap: '30px'}}>
                <PostsCard />
                <PostsCard />
                <PostsCard />
                <PostsCard />
                <PostsCard />
                <PostsCard />
                <PostsCard />
                <PostsCard />
                <PostsCard />
            </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-around', marginTop: '2rem'}}>
                <Button variant="success">Previous Page</Button>{' '}
                <Button variant="success">Next Page</Button>{' '}
                </div>
        </div>
        </div>
    )
}


export default PostsSection