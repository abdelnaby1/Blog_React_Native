import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import {Context as BlogContext} from '../context/BlogContext';

const EditScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {state, editBlogPost} = useContext(BlogContext);
  const blogPost = state.find(blogPost => blogPost.id === id);
  return (
    <BlogPostForm
      type="edit"
      initialValues={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) =>
        editBlogPost(id, title, content, () => navigation.pop())
      }
    />
  );
};
const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 40,
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 15,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {fontSize: 18, fontWeight: '500', marginBottom: 5, marginLeft: 5},
});
export default EditScreen;
