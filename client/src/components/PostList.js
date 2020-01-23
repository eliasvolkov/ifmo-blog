import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PostItem } from './PostItem';
import { Spinner } from './Spinner';

export const PostList = () => {
    const [posts, setPosts] = useState([])
    const history = useHistory();

    const handleEdit = (id) => {
        history.push(`/posts/edit/${id}`)
    }
    const handleDelete = (id) => {
        const deletePost = async () => {
            await axios({
                method: 'delete',
                url: `/api/posts/${id}`,

            });
            await history.push('/')
        }
        deletePost()
    }

    useEffect(() => {
        const getPosts = async () => {
            const post = await axios.get(`/api/posts`);
            await setPosts(() => post.data)
        }
        getPosts()
    }, [])
    return (
        <ul className="list-group">
            {posts.length ?
                posts.map(post => (
                    <PostItem {...post} key={post._id} handleEdit={handleEdit} handleDelete={handleDelete} />
                ))
                : <Spinner />
            }
        </ul>
    )
}
