import React from 'react';
import { Field, Form } from 'react-final-form';

export const PostForm = ({ postData, onSubmit }) => {
    return (
        <Form
            initialValues={postData}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => {
                return (
                    <form className="col-12" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <Field className="form-control" name="title" placeholder="How to play guitar" component="input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="categories">Category</label>
                            <Field className="form-control" name="categories" placeholder="Music" component="input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <Field className="form-control" rows="3" component="textarea" name="content" placeholder="The first lesson is here" />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                )
            }}
        />
    )
}
