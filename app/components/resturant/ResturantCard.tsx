import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useRouter} from 'expo-router'; // Import useRouter for navigation
import { restaurantStyles } from '@/app/styles/styles';
import { Restaurant } from '@/app/Types';
import { useRestaurant } from './ResturantContext';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const router = useRouter(); // Access router

  return (
    <TouchableOpacity
      style={restaurantStyles.restaurantCard}
      onPress={() => {
        
        router.push({
          pathname: `/components/resturant/${restaurant.id}`,
          params: {
            id: restaurant.id,
            name: restaurant.name,
            city: restaurant.city,
            kosherType: restaurant.kosherType,
          },
        });
        
        

      }} // Navigate to dynamic restaurant page
    >
      {/* <Image
        source={{ uri: restaurant.image }}
        style={restaurantStyles.restaurantImage}
      /> */}
      <View style={restaurantStyles.restaurantInfo}>
        <Text numberOfLines={1} style={restaurantStyles.restaurantName}>
          {restaurant.name}
        </Text>
        {/* <Text numberOfLines={1} style={restaurantStyles.restaurantType}>
          {restaurant.type}
        </Text> */}
        <View style={restaurantStyles.kosherBadge}>
          <Text style={restaurantStyles.kosherText}>{restaurant.kosherType}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
