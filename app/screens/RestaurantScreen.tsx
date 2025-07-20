import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Restaurant: { restaurantId: string };
};

type Props = StackScreenProps<RootStackParamList, 'Restaurant'>;

const RestaurantScreen = ({ route }: Props) => {
  const { restaurantId } = route.params;

  return (
    <View>
      {/* Your existing restaurant detail screen content */}
      <Text>Restaurant ID: {restaurantId}</Text>
    </View>
  );
};

export default RestaurantScreen; 