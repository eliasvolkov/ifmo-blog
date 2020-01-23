import React from 'react'
import { PostList } from '../components/PostList'

export const Index = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <PostList />
                </div>
            </div>
        </div>
    )
}
