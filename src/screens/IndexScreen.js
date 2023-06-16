import React, {useContext} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/dist/Feather';
const IndexScreen = ({navigation}) => {
  const {state, addBlogPost, deleteBlogPost} = useContext(BlogContext);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create Blog')}>
          <Icon name="plus" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text style={styles.title}>All Blog Posts</Text>
      {state.length > 0 ? (
        <FlatList
          data={state}
          keyExtractor={blogPost => blogPost.title}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Blog', {id: item.id})}>
                <View style={styles.row}>
                  <Text style={styles.postTitle}>{item.title}</Text>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Icon name="trash" style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <Text style={styles.noPostsTitle}>There is no Posts yet</Text>
      )}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
  },
  postTitle: {fontSize: 18},
  icon: {fontSize: 24},
  noPostsTitle: {
    paddingHorizontal: 40,
    fontSize: 22,
    fontWeight: '300',
    alignSelf: 'center',
    marginVertical: 150,
  },
});
export default IndexScreen;
