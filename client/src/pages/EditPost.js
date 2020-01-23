import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { PostForm } from '../components/PostForm';
import { Spinner } from '../components/Spinner';

export const EditPost = () => {
    const params = useParams();


    const [post, setPost] = useState(null)
    const history = useHistory();


    useEffect(() => {
        const getPost = async () => {
            const post = await axios.get(`/api/posts/${params.id}`);
            await delete post.data._id
            await setPost(post.data)
        }
        getPost()
    }, [params.id])


    const onSubmit = (data) => {
        const editPost = async () => {
            await axios({
                method: 'put',
                url: `/api/posts/${params.id}`,
                data
            });
            await history.push('/posts')
        }

        editPost();

    }


    return (
        <div className="container">
            <div className="row">
                {post ?
                    <PostForm onSubmit={onSubmit} postData={post} />
                    :
                    <Spinner />
                }
            </div>
        </div>
    )
}
