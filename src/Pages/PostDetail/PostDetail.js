import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons'



const PostDetail = () => {
    const post = useLoaderData();
    // console.log(post);
    const { image, postDetail } = post;

    const [countLove, setCountLove] = useState(0);
    const [countLike, setCountLike] = useState(0);


    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">

                    <div className="badge badge-secondary"></div>
                </h2>
                <p>{postDetail}</p>
                <div className="card-actions justify-end">


                    <div onClick={() => setCountLove(countLove + 1)} className="badge badge-outline"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
                    <div onClick={() => setCountLike(countLike + 1)} className="badge badge-outline"><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></div>
                </div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{countLove}</div>
                    <div className="badge badge-outline">{countLike}</div>
                </div>
            </div>
            <div>
            <textarea className="textarea w-full" placeholder="Add a comment"></textarea>
            <input className='btn w-full' value="Comment" type="submit" />
            </div>
        </div>
    );
};

export default PostDetail;