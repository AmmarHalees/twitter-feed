import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import postdata from "../data/posts.json";
import Post from '../Post/Post';
import {Link} from 'react-router-dom';

const Tweet = () => {

    const {id} = useParams();
    
    const [TweetPost, setTweetPost] = useState({});

     const {id:postId , user = {}, description, title, src, comments = []} = TweetPost;

    useEffect(()=>{

        setTweetPost(postdata.data.find(post => post.id === id));

    },[id]);

    return ( 

        <div>

            <Post id={postId} user={user} description={description} title={title} src={src} comments={comments} />
      
            {comments.map(({id, user, description, title, src, comments })=><Link key={id} className='post-link'  to={`/t/${id}`}><Post id={id} user={user} description={description} title={title} src={src} comments={comments} /></Link>)}
      
        </div>
     );
}
 
export default Tweet;