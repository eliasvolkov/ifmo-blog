import React from 'react'
import { PostItem } from './PostItem'

export const PostList = () => {
    const posts = [
        {
            title: 'jkjk',
            content: "that's so fucking good",
            categories: "Wonderful"
        },
        {
            title: 'erty',
            content: "that's so fucking u",
            categories: "music"
        },
    ]
    return (
        <ul className="list-group">
            {posts.map(post => (
                <PostItem {...post}/>
            ))}
        </ul>
    )
}
