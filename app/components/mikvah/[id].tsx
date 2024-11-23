// app/restaurants/[id].tsx
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';


import MikvahPage from './MkvahPage';
import { Mikvah } from '@/app/Types';


export const mikvahs: Mikvah[] = [
  {
    id: 1,
    name: 'Central Mikvah',
    address: '789 Maple St, City',
    phone: '+1234567890',
    openingHours: 'Sun-Thu: 5:00 PM - 10:00 PM',
    rabbi: 'Rabbi Goldberg',
    menSection: true,
    womenSection: true,
    image: 'https://example.com/mikvah1.jpg',
  },
  // Add more mikvahs as needed
];


export default function MikvahDetail() {
  const { id } = useLocalSearchParams(); // Get restaurant id from the URL
  const mikvah = mikvahs.find((r) => r.id === Number(id));

  if (!mikvah) {
    return <Text>Restaurant not found</Text>;
  }

  return <MikvahPage mikvah={mikvah} />;
}
