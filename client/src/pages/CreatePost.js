import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { PostForm } from '../components/PostForm';

export const CreatePost = () => {
    const history = useHistory();

    const onSubmit = (data) => {

        const editPost = async () => {
            await axios({
                method: 'post',
                url: `/api/posts`,
                data
            });
            await history.push('/posts')
        }
        editPost();
    }

    return (
        <div className="container">
            <div className="row">
                <PostForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}
