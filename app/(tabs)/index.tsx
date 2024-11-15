// Header.jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native';
import { Restaurant, KosherType, Synagogue, Category } from '../Types';
import { RestaurantCard } from '../ResturantCard';
import { styles, synagogueStyles } from '../styles';
import { SynagogueCard } from '../SynagogueCard';
import Categories from '../Categories';

const Header = () => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.locationButton}>
      <Text style={styles.locationText}>חנה סנש 14</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cartButton} />
  </View>
);



// PromotionBanner.jsx
const PromotionBanner = () => (
  <View style={styles.bannerContainer}>
    <Image
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Chabad_Mashiach_Flag.svg/250px-Chabad_Mashiach_Flag.svg.png' }}
      style={styles.bannerImage}
    />
    
  </View>
);





// HomeScreen.tsx
const HomeScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('restaurants');

  const categories: Category[] = [
    { id: 'restaurants', icon: 'bowl-mix', label: 'Restaurants' },
    { id: 'groceries', icon: 'shopping', label: 'Groceries' },
    { id: 'synagogues', icon: 'star-of-david', label: 'Synagogues' },
    { id: 'alcohol', icon: 'beer', label: 'Alcohol' },
  ];

  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Atza Sushi Bar | Hadera',
      type: 'Asian Restaurant | Kosher',
      kosherType: 'Mehadrin',
      deliveryFee: '0',
      deliveryTime: '30-40 min',
      rating: '8.2',
      image: 'https://recipeking.co.il/wp-content/uploads/elementor/thumbs/salmon-sushi-qn36s45utc8g8ghwbwg5zodbylz7xf9eg22lklhzto.webp',
      sponsored: true,
    },
  ];

  const mockSynagogues: Synagogue[] = [
    {
      id: 1,
      name: 'Beit Knesset HaGadol',
      type: 'Ashkenazi',
      nextPrayer: 'Mincha',
      prayerTime: '16:30',
      rabbi: 'Rabbi David Cohen',
      address: 'HaRav Kook 12',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Or HaChaim',
      type: 'Sephardi',
      nextPrayer: 'Arvit',
      prayerTime: '19:45',
      rabbi: 'Rabbi Yosef Mor',
      address: 'Herzl 45',
      image: 'https://via.placeholder.com/300',
    },
    // Add more synagogues...
  ];

  const renderContent = () => {
    switch (activeCategory) {
      case 'restaurants':
        return (
          <View style={styles.restaurantsGrid}>
            {restaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </View>
        );
      case 'synagogues':
        return (
          <View style={synagogueStyles.synagoguesList}>
            {mockSynagogues.map(synagogue => (
              <SynagogueCard key={synagogue.id} synagogue={synagogue} />
            ))}
          </View>
        );
      // Add other cases for groceries and alcohol...
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <Categories 
          categories={categories} 
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <PromotionBanner/>
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};



export default HomeScreen;