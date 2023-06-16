import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
const BlogPostForm = ({
  type,
  onSubmit,
  initialValues = {title: '', content: ''},
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.title}>
        {type === 'create' ? 'Create' : 'Edit'} a Blog
      </Text>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button
        title="Save Blog Post"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
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
export default BlogPostForm;
