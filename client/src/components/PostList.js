import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { PostItem } from './PostItem'

export const PostList = () => {
    const posts = [
        {
            id: '01',
            title: 'jkjk',
            content: "that's so fucking good",
            categories: "Wonderful"
        },
        {
            id: '02',
            title: 'erty',
            content: "that's so fucking u",
            categories: "music"
        },
    ]
    return (
        <ul className="list-group">
            {posts.map(post => (
                <Link to={`posts/${post.id}`}>
                    <PostItem {...post} />
                </Link>

            ))}
        </ul>
    )
}
