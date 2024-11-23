import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';

const DiscoverTab = () => {
  const data = [
    { title: 'EXERCISES', subtitle: '132 Exercises', image: 'https://via.placeholder.com/300' },
    { title: 'RECIPES', subtitle: '52 Entries', image: 'https://via.placeholder.com/300' },
    { title: 'NUTRITIONAL', subtitle: '', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.card}>
          <ImageBackground source={{ uri: item.image }} style={styles.backgroundImage} imageStyle={styles.imageStyle}>
            <Text style={styles.title}>{item.title}</Text>
            {item.subtitle ? <Text style={styles.subtitle}>{item.subtitle}</Text> : null}
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  card: {
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 5,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imageStyle: {
    borderRadius: 20, // Ensures image corners are rounded
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
});

export default DiscoverTab;
