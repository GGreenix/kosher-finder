// /app/synagogue/[id].tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Mock data (Replace this with actual data fetching logic)
const synagogues = [
  {
    id: 1,
    name: 'Great Synagogue',
    type: 'Orthodox',
    nextPrayer: 'Mincha',
    prayerTime: '5:00 PM',
    rabbi: 'Rabbi Cohen',
    address: '123 Main St, City',
    image: 'https://example.com/synagogue1.jpg',
  },
  // Add more synagogues as needed
];

const SynagoguePage = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // Get the synagogue ID from the route parameters

  // Find the synagogue data based on the ID
  const synagogue = synagogues.find((s) => s.id === Number(id));

  if (!synagogue) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Synagogue not found</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <>
      {/* Hide the default header */}
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.container}>
        {/* Custom Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{synagogue.name}</Text>
        </View>

        <ScrollView>
          {/* Synagogue Info */}
          <View style={styles.synagogueInfo}>
            <Image source={{ uri: synagogue.image }} style={styles.image} resizeMode="cover" />

            <View style={styles.detailsContainer}>
              <Text style={styles.synagogueName}>{synagogue.name}</Text>

              <View style={styles.detailRow}>
                <Ionicons name="menu" size={20} color="#666" />
                <Text style={styles.detailText}>{synagogue.type}</Text>
              </View>

              <View style={styles.detailRow}>
                <Ionicons name="person-outline" size={20} color="#666" />
                <Text style={styles.detailText}>Rabbi: {synagogue.rabbi}</Text>
              </View>

              <View style={styles.detailRow}>
                <Ionicons name="time-outline" size={20} color="#666" />
                <Text style={styles.detailText}>
                  Next Prayer: {synagogue.nextPrayer} at {synagogue.prayerTime}
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Ionicons name="location-outline" size={20} color="#666" />
                <Text style={styles.detailText}>{synagogue.address}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  synagogueInfo: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  synagogueName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  detailsContainer: {
    paddingHorizontal: 8,
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  backButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SynagoguePage;
