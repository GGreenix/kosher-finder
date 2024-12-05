// TimesOfDayPage.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import * as Location from 'expo-location';
import { ComplexZmanimCalendar, GeoLocation, TimeZone } from 'kosher-zmanim';
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TimesOfDayPage = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [zmanim, setZmanim] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);

        const { latitude, longitude } = loc.coords;
        const timeZone = TimeZone.getDSTSavings('Asia/Jerusalem') // Replace with the appropriate timezone

        const geoLocation = new GeoLocation(
          // 'Current Location',
          // latitude,
          // longitude,
          // 0,
          // 'Asia/Jerusalem'
        );
        const zmanimCalendar = new ComplexZmanimCalendar();
        zmanimCalendar.setDate(new Date());
        setZmanim({
          alotHashachar: zmanimCalendar.getAlosHashachar(),
          sunrise: zmanimCalendar.getSunrise(),
          sofZmanShema: zmanimCalendar.getSofZmanShmaGRA(),
          sofZmanTefillah: zmanimCalendar.getSofZmanTfilaGRA(),
          chatzot: zmanimCalendar.getChatzos(),
          minchaGedolah: zmanimCalendar.getMinchaGedola(),
          minchaKetana: zmanimCalendar.getMinchaKetana(),
          plagHamincha: zmanimCalendar.getPlagHamincha(),
          sunset: zmanimCalendar.getSunset(),
          tzeitHakochavim: zmanimCalendar.getTzais(),
        });
      } catch (error) {
        console.error(error);
        setErrorMsg('An error occurred while fetching times.');
      }
    })();
  }, []);

  if (errorMsg) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </SafeAreaView>
    );
  }

  if (!zmanim) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  const formatTime = (date: Date) => {
    return date.toString();
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </Pressable>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Jewish Times of Day (Zmanim)</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.label}>Alot Hashachar (Dawn):</Text>
            <Text style={styles.time}>{formatTime(zmanim.alotHashachar)}</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.label}>Netz Hachamah (Sunrise):</Text>
            <Text style={styles.time}>{formatTime(zmanim.sunrise)}</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.label}>Sof Zman Kriat Shema:</Text>
            <Text style={styles.time}>{formatTime(zmanim.sofZmanShema)}</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.label}>Sof Zman Tefillah:</Text>
            <Text style={styles.time}>{formatTime(zmanim.sofZmanTefillah)}</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.label}>Chatzot Hayom (Midday):</Text>
            <Text style={styles.time}>{formatTime(zmanim.chatzot)}</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.label}>Mincha Gedolah:</Text>
            <Text style={styles.time}>{formatTime(zmanim.minchaGedolah)}</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.label}>Mincha Ketana:</Text>
            <Text style={styles.time}>{formatTime(zmanim.minchaKetana)}</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.label}>Plag Hamincha:</Text>
            <Text style={styles.time}>{formatTime(zmanim.plagHamincha)}</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.label}>Shkiah (Sunset):</Text>
            <Text style={styles.time}>{formatTime(zmanim.sunset)}</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.label}>Tzeit Hakochavim (Nightfall):</Text>
            <Text style={styles.time}>{formatTime(zmanim.tzeitHakochavim)}</Text>
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
  content: {
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 10,
    left: 10,
    zIndex: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 18,
    color: '#333',
  },
  time: {
    fontSize: 18,
    color: '#333',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default TimesOfDayPage;
