// components/RestaurantsSection.tsx
import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import { styles } from '../styles/styles';
import { Restaurant } from '../Types';
import { RestaurantCard } from './ResturantCard';

// RestaurantsSection.tsx
interface RestaurantsSectionProps {
  restaurants: Restaurant[];
}

export const RestaurantsSection: React.FC<RestaurantsSectionProps> = ({ restaurants }) => (
  <>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Lunch near you</Text>
      <TouchableOpacity>
        <Text style={styles.seeAllText}>See all</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.restaurantsGrid}>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </View>
  </>
);