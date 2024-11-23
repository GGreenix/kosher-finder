// app/mikvah/[id].tsx
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
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Mikvah } from '../../Types';
import { styles } from './mikvahStyles';


interface MikvahCardProps {
    mikvah: Mikvah;
  }

const MikvahPage: React.FC<MikvahCardProps> = ( mikvahProps ) =>{
  

  const mikvah = mikvahProps.mikvah;

  if (!mikvah) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Mikvah not found</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{mikvah.name}</Text>
        </View>

        <ScrollView>
          <View style={styles.mikvahInfo}>
            <Image source={{ uri: mikvah.image }} style={styles.image} resizeMode="cover" />

            <View style={styles.detailsContainer}>
              <Text style={styles.mikvahName}>{mikvah.name}</Text>

              <View style={styles.detailRow}>
                <Ionicons name="location-outline" size={20} color="#666" />
                <Text style={styles.detailText}>{mikvah.address}</Text>
              </View>

              <View style={styles.detailRow}>
                <Ionicons name="call-outline" size={20} color="#666" />
                <Text style={styles.detailText}>Phone: {mikvah.phone}</Text>
              </View>

              <View style={styles.detailRow}>
                <Ionicons name="time-outline" size={20} color="#666" />
                <Text style={styles.detailText}>Hours: {mikvah.openingHours}</Text>
              </View>

              <View style={styles.detailRow}>
                <Ionicons name="person-outline" size={20} color="#666" />
                <Text style={styles.detailText}>Rabbi: {mikvah.rabbi}</Text>
              </View>

              {mikvah.menSection && (
                <View style={styles.detailRow}>
                  <Ionicons name="male-outline" size={20} color="#666" />
                  <Text style={styles.detailText}>Men's Section Available</Text>
                </View>
              )}

              {mikvah.womenSection && (
                <View style={styles.detailRow}>
                  <Ionicons name="female-outline" size={20} color="#666" />
                  <Text style={styles.detailText}>Women's Section Available</Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



export default MikvahPage;
