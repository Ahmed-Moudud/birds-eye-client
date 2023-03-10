import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import PostCard from '../PostCard/PostCard';
import Loading from '../Shared/Loading/Loading';

const Media = () => {
    const {loading} = useContext(AuthContext);

    const {data: postInfo =[]} = useQuery({
        queryKey: ['postInfo'],
        queryFn: async() => {
            const res = await fetch('https://birdseye-server.vercel.app/posts');
            const data = await res.json();
            return data;
        }
    })

    if(loading){
        return <Loading></Loading>
    }
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