import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store"; // Ensure this is imported
import { fetchPosts } from "../../redux/auth/features"; // Import the fetchPosts function
import avatar from "../../../assets/avatar.png"; // Adjust the path as necessary

const ExistingPostsScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const loadPosts = async () => {
    console.log("Loading posts..."); // Log when loading starts
    try {
      const postsData = await dispatch(fetchPosts()); // Dispatch the fetchPosts action
      console.log("Posts data received:", postsData); // Log the received posts data
      setPosts(postsData); // Set the posts data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      Alert.alert("Error", "Failed to load posts.");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts(); // Call loadPosts when the component mounts
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.username}>@{item.category}</Text>
      </View>
      <Text style={styles.content}>{item.content}</Text>
      {item.media_url && (
        <Image source={{ uri: item.media_url }} style={styles.mediaImage} />
      )}
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View className="flex-1">
      <View className="h-12 bg-white w-full" />
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
      />
    </View>
  );
};

export default ExistingPostsScreen;

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  content: {
    marginVertical: 5,
  },
  mediaImage: {
    width: 140,
    height: 157,
    borderRadius: 8,
    margin: 5,
  },
}); 