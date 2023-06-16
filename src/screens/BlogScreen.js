import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {View, TouchableOpacity} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/dist/Feather';

const BlogScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {state} = useContext(BlogContext);
  const blogPost = state.find(blogPost => blogPost.id === id);
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit Blog', {id: id})}>
          <Icon name="edit" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, id]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <View style={styles.line}></View>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    color: 'blue',
    fontSize: 28,
    borderBottomWidth: 15,
  },
  content: {
    color: 'gray',
    fontSize: 28,
    marginTop: 50,
  },
  line: {
    borderBottomColor: 'black',
    width: '100%',
    borderBottomWidth: 2,
  },
});
export default BlogScreen;
