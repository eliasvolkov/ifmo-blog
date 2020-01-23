import React from 'react'
import { PostList } from '../components/PostList'

export const Index = () => {
    return (
        <div className="container">
            <div className="row pt-3">
                <div className="col-sm-10">
                    <PostList />
                </div>
            </div>
        </div>
    )
}
