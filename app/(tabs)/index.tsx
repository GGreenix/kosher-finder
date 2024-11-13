// Header.jsx
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native';
import { Restaurant, KosherType } from '../Types';
import { RestaurantCard } from '../ResturantCard';
import { styles } from '../styles';
import { RestaurantsSection } from './resturants';

const Header = () => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.locationButton}>
      <Text style={styles.locationText}>חנה סנש 14</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cartButton} />
  </View>
);

// Categories.jsx
const Categories = () => {
  const categories = [
    { icon: 'bowl-mix', label: 'Restaurants' },
    { icon: 'shopping', label: 'Groceries' },
    { icon: 'pill', label: 'Pharmacies' },
    { icon: 'beer', label: 'Alcohol' },
    { icon: 'dog', label: 'Pet Shop' },
  ];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.categoriesContainer}
    >
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryItem}>
          <Text style={styles.categoryLabel}>{category.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

// PromotionBanner.jsx
const PromotionBanner = () => (
  <View style={styles.bannerContainer}>
    <Image
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Chabad_Mashiach_Flag.svg/250px-Chabad_Mashiach_Flag.svg.png' }}
      style={styles.bannerImage}
    />
    
  </View>
);





// HomeScreen.jsx
const HomeScreen = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Atza Sushi Bar | Hadera',
      type: 'Asian Restaurant | Kosher',
      deliveryFee: '0',
      deliveryTime: '30-40 min',
      rating: '8.2',
      image: 'https://via.placeholder.com/300',
      sponsored: true,
      kosherType: 'Mehadrin'
      
    },
    {
      id: 1,
      name: 'Atza Sushi Bar | Hadera',
      type: 'Asian Restaurant | Kosher',
      deliveryFee: '0',
      deliveryTime: '30-40 min',
      rating: '8.2',
      image: 'https://via.placeholder.com/300',
      sponsored: true,
      kosherType: 'Mehadrin'
      
    },
    {
      id: 1,
      name: 'Atza Sushi Bar | Hadera',
      type: 'Asian Restaurant | Kosher',
      deliveryFee: '0',
      deliveryTime: '30-40 min',
      rating: '8.2',
      image: 'https://via.placeholder.com/300',
      sponsored: true,
      kosherType: 'Mehadrin'
      
    },
    {
      id: 1,
      name: 'Atza Sushi Bar | Hadera',
      type: 'Asian Restaurant | Kosher',
      deliveryFee: '0',
      deliveryTime: '30-40 min',
      rating: '8.2',
      image: 'https://via.placeholder.com/300',
      sponsored: true,
      kosherType: 'Mehadrin'
      
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <Categories />
        <PromotionBanner />
        <RestaurantsSection restaurants={restaurants} />
      </ScrollView>
    </SafeAreaView>
  );
};



export default HomeScreen;