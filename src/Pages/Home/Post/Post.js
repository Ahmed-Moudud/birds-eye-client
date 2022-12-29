import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Post = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const handlePost = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })

            .then(res => res.json())
            .then(imgData => {
               if(imgData.success){
                const post = {
                    postDetail: data.postDetail,
                    image: imgData.data.url
                }
                fetch('http://localhost:5000/posts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(post)
                })
                    .then(res => res.json())
                    .then(result => {
                        toast.success('Post uploaded successfully!');
                        navigate('/media')
                    })
               }
            })
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit(handlePost)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Write Here to Express Your Feeling!!</span>
                    </label>
                    <textarea type='text'
                    style={{width: "100%", height:"250px"}}
                        {...register("postDetail", {
                            required: "Product Name is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.postDetail && <p className='text-red-500'>{errors.postDetail.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type='file'
                        {...register("image", {
                            required: "Image is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <div>
                    <input className='btn btn-outline mt-4' value="Post" type="submit" />
                </div>

            </form>
        </div>
    );
};

export default Post;