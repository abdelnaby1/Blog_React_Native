import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import {Context as BlogContext} from '../context/BlogContext';

const CreateBlogScreen = ({navigation}) => {
  const {addBlogPost} = useContext(BlogContext);
  return (
    <BlogPostForm
      type="create"
      onSubmit={(title, content) =>
        addBlogPost(title, content, () => navigation.navigate('Index'))
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
export default CreateBlogScreen;
