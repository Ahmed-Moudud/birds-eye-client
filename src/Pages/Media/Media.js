import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PostCard from '../PostCard/PostCard';

const Media = () => {

    const {data: postInfo =[]} = useQuery({
        queryKey: ['postInfo'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/posts');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-center text-2xl my-2'>All Posts</h2>
           <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 w-5/6 mx-auto'>
            {
                postInfo.map(singlePost => <PostCard
                key={singlePost._id}
                singlePost={singlePost}
                ></PostCard>)
            }
           </div>
        </div>
    );
};

export default Media;