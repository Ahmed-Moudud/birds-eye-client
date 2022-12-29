import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({singlePost}) => {
    console.log(singlePost);
    const {postDetail, image, _id} = singlePost;
    function truncate (postDeatail, size){
        return postDeatail.length > size ? postDeatail.slice(0, size -1) + '...': postDeatail;
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" style={{width: "100%", height:"350px"}}/></figure>
            <div className="card-body">
                <h2 className="card-title">My Feeling</h2>               
                <p>{truncate(postDetail, 100)}</p>
                <div className="card-actions justify-end">
                   <Link to='postdetail'>
                   <button className="btn btn-primary">Show Detail</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;