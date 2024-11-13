// components/RestaurantsSection.tsx
import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import { commonStyles, styles } from '../styles';
import { RestaurantCard } from '../ResturantCard';
import { Restaurant } from '../Types';

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