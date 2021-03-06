import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

const FIELDS = {
    title:{
        type: 'input',
        label: 'Title for Post'
    },
    categories:{
        type: 'input',
        label: 'Enter some categories for this post'
    },
    content: {
        type: 'textarea',
        label: 'Post Contents'
    }
};

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    renderField(fieldConfig, field){
        const fieldHelper = this.props.fields[field];
        
        return (
            <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`} >
                <label>{fieldConfig.label}</label>
                <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
                <div className="text-help">
                    {fieldHelper.touched ? fieldHelper.error : ''}
                </div>
            </div>
        );
    }

    onSubmit(props){
        this.props.createPost(props)
        .then(() => {
                //blog post has been created, navigate the user to the index
                //we navigate by calling this.context.router.push with the
                //new path to navigate to.
                this.context.router.push('/posts');
        });
    }

    render(){
        const { fields: { title, categories, content }, handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>
                
                {_.map(FIELDS, this.renderField.bind(this))}

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger" >Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    _.each(FIELDS, (type, field) => {
        if(!values[field]){
            errors[field] = `Enter a ${field}`;
        }

    });

    // if(!values.title){
    //     errors.title = 'Enter a username';
    // }

    // if(!values.categories){
    //     errors.categories = 'Enter categories';
    // }

    // if(!values.content){
    //     errors.content = 'Enter some content';
    // }


    return errors;
}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'PostsNewForm',
    fields: _.keys(FIELDS),
    //fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost } )(PostsNew);

