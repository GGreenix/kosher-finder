// app/restaurants/[id].tsx
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';


import RestaurantPage from '@/app/components/ResturantPage';
import { Restaurant } from '../Types';

// Mock Data
const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Atza Sushi Bar',
    type: 'Asian Restaurant | Kosher',
    kosherType: 'Mehadrin',
    deliveryFee: '₪20',
    deliveryTime: '30-40 min',
    rating: '8.2',
    image: 'https://example.com/sushi.jpg',
    sponsored: true,
  },
];

export default function RestaurantDetail() {
  const { id } = useLocalSearchParams(); // Get restaurant id from the URL
  const restaurant = mockRestaurants.find((r) => r.id === Number(id));

  if (!restaurant) {
    return <Text>Restaurant not found</Text>;
  }

  return <RestaurantPage restaurant={restaurant} />;
}
