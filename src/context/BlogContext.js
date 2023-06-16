import React, {useState, useReducer} from 'react';
import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext';
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BLOGPOSTS':
      return action.payload;
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
const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({type: 'GET_BLOGPOSTS', payload: response.data});
  };
};
const addBlogPost = dispatch => {
  return async (title, content, cb) => {
    await jsonServer.post('/blogposts', {title, content});
    // dispatch({type: 'ADD_BLOGPOST', payload: {title, content}});
    // if (cb) {
    //   cb();
    // }
  };
};
const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({type: 'DELETE_BLOGPOST', payload: id});
  };
};
const editBlogPost = dispatch => {
  return async (id, title, content, cb) => {
    await jsonServer.put(`/blogposts/${id}`, {title, content});
    dispatch({type: 'EDIT_BLOGPOST', payload: {id, title, content}});
    if (cb) {
      cb();
    }
  };
};
export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
  [],
);
