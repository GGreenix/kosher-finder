import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const DiscoverTab = () => {
  const router = useRouter();

  const data = [
    {
      title: 'זמני היום',
      subtitle: '132 Exercises',
      image: 'https://via.placeholder.com/300',
      route: '../components/TimesOfDayPage',
    },
    {
      title: 'זמני היום',
      subtitle: '132 Exercises',
      image: 'https://via.placeholder.com/300',
      route: '../components/TimesOfDayPage',
    },
    {
      title: 'זמני היום',
      subtitle: '132 Exercises',
      image: 'https://via.placeholder.com/300',
      route: '../components/TimesOfDayPage',
    },
    // Add more items if needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {data.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => router.push(item.route)}
          style={styles.card}
        >
          <ImageBackground
            source={{ uri: item.image }}
            style={styles.backgroundImage}
            imageStyle={styles.imageStyle}
          >
            <Text style={styles.title}>{item.title}</Text>
            {item.subtitle ? (
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            ) : null}
          </ImageBackground>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center', // Centers items horizontally
    paddingVertical: "20%",   // Adds vertical padding
  },
  card: {
    width: '90%',      // Makes the card width 90% of the container
    maxWidth: 400,     // Optional: limits the maximum width
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15,
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
    textAlign: 'right', // Centers the text
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'right', // Centers the text
  },
});

export default DiscoverTab;
