import React, {useState, useReducer} from 'react';

import createDataContext from './createDataContext';
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'DELETE_BLOGPOST':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'EDIT_BLOGPOST':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};
const addBlogPost = dispatch => {
  return (title, content, cb) => {
    dispatch({type: 'ADD_BLOGPOST', payload: {title, content}});
    if (cb) {
      cb();
    }
  };
};
const deleteBlogPost = dispatch => {
  return id => {
    dispatch({type: 'DELETE_BLOGPOST', payload: id});
  };
};
const editBlogPost = dispatch => {
  return (id, title, content, cb) => {
    dispatch({type: 'EDIT_BLOGPOST', payload: {id, title, content}});
    if (cb) {
      cb();
    }
  };
};
export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost},
  [{title: 'Test Title', content: 'Test Content', id: 1}],
);
