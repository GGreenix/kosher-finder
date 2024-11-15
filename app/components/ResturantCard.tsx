import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Restaurant } from '../Types';
import { restaurantStyles } from '../styles/styles';
import { useRouter} from 'expo-router'; // Import useRouter for navigation

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const router = useRouter(); // Access router

  return (
    <TouchableOpacity
      style={restaurantStyles.restaurantCard}
      onPress={() => router.push(`/restaurant/${restaurant.id}`)} // Navigate to dynamic restaurant page
    >
      <Image
        source={{ uri: restaurant.image }}
        style={restaurantStyles.restaurantImage}
      />
      {restaurant.sponsored && (
        <Text style={restaurantStyles.sponsoredText}>Sponsored</Text>
      )}
      <View style={restaurantStyles.restaurantInfo}>
        <Text numberOfLines={1} style={restaurantStyles.restaurantName}>
          {restaurant.name}
        </Text>
        <Text numberOfLines={1} style={restaurantStyles.restaurantType}>
          {restaurant.type}
        </Text>
        <View style={restaurantStyles.kosherBadge}>
          <Text style={restaurantStyles.kosherText}>{restaurant.kosherType}</Text>
        </View>
        <View style={restaurantStyles.restaurantMetrics}>
          <Text style={restaurantStyles.deliveryPrice}>₪{restaurant.deliveryFee}</Text>
          <Text style={restaurantStyles.deliveryTime}>{restaurant.deliveryTime}</Text>
          <Text style={restaurantStyles.rating}>{restaurant.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
