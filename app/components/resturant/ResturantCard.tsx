import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { restaurantStyles } from '@/app/styles/styles';
import { Restaurant } from '@/app/Types';
import { useRestaurant } from './ResturantContext';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const navigation = useNavigation(); // Switch from useRouter to useNavigation

  return (
    <TouchableOpacity
      style={restaurantStyles.restaurantCard}
      onPress={() => {
        navigation.navigate('Restaurant', {
          restaurantId: restaurant.id
        });
      }}
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
