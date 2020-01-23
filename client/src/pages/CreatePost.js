import React from 'react';
import { PostForm } from '../components/PostForm';

export const CreatePost = () => {
    const onSubmit = (data) => {
        console.log(data);
    }
    const post = {
        title: 'jj',
        categories: 'jki',
        content: 'hjklhklh'
    }
    return (
        <div className="container">
            <div className="row">
                <PostForm onSubmit={onSubmit} postData={post}/>
            </div>
        </div>
    )
}
