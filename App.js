import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as BlogProvider} from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import BlogScreen from './src/screens/BlogScreen';
import CreateBlogScreen from './src/screens/CreateBlogScreen';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerTitle: 'Blog List', headerBackTitle: 'Back'}}>
          <Stack.Screen name="Index" component={IndexScreen} />
          <Stack.Screen name="Blog" component={BlogScreen} />
          <Stack.Screen name="Create Blog" component={CreateBlogScreen} />
          <Stack.Screen name="Edit Blog" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
