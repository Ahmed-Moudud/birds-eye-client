import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import PostCard from '../../PostCard/PostCard';
import Loading from '../../Shared/Loading/Loading';
import Post from '../Post/Post';

const Home = () => {
    const {loading} = useContext(AuthContext);
    const {data: selectedpost = []} = useQuery({
        queryKey: ['selectedpost'],
        queryFn: async() => {
            const res = await fetch ('https://birdseye-server.vercel.app/selectedpost');
            const data = await res.json();
            return data;
        }
    });

    if(loading){
        return <Loading></Loading>
    }


    return (
        <div className=''>
            <Post></Post>
            <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 w-5/6 mx-auto mt-5'>
                {
                    selectedpost.map(singlePost => <PostCard
                    key={singlePost._id}
                    singlePost= {singlePost}
                    ></PostCard>)
                }
            </div>
        </div>
    );
};

export default Home;