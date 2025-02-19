// app/restaurants/[id].tsx
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';


import RestaurantPage from '@/app/components/resturant/ResturantPage';
import { Restaurant } from '../../Types';


export default function RestaurantDetail() {
  
  const params = useLocalSearchParams();

  // Construct the restaurant object from the individual URL parameters.
  const restaurant = {
    id: params.id as string,
    name: params.name as string,
    city: params.city as string,
    koshertype: params.koshertype as string,
  };
  if (!restaurant.id) {
    return <Text>Restaurant not found</Text>;
  }

  return <RestaurantPage restaurant={{id: 0,name: restaurant.name, city: restaurant.city, kosherType: restaurant.koshertype}} />;
}
