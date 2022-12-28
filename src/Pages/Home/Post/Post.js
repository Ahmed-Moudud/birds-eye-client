import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';

const Post = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_imgbb_key;

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
               console.log(imgData);
            })
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit(handlePost)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Write anything to Express your Feeling!!</span>
                    </label>
                    <input type='text'
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