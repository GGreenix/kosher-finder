import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Restaurant } from '@/app/Types';



// Mock data as fallback (in real scenario, fetch data or pass it through context/state management)
const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Atza Sushi Bar | Hadera',
    type: 'Asian Restaurant | Kosher',
    kosherType: 'Mehadrin',
    deliveryFee: '0',
    deliveryTime: '30-40 min',
    rating: '8.2',
    image: 'https://example.com/sushi.jpg',
    sponsored: true,
  },
  {
    id: 2,
    name: 'Pizza Hut | Tel Aviv',
    type: 'Pizza | Kosher',
    kosherType: 'Standard',
    deliveryFee: '5',
    deliveryTime: '25-35 min',
    rating: '9.0',
    image: 'https://example.com/pizza.jpg',
    sponsored: false,
  },
];
interface RestaurantCardProps {
    restaurant: Restaurant;
  }
const RestaurantPage: React.FC<RestaurantCardProps> = (restaurantProps) => {
  const router = useRouter();

  const restaurant = restaurantProps.restaurant

  if (!restaurant) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Restaurant not found</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Restaurant Info */}
        <View style={styles.restaurantInfo}>
          <Image source={{ uri: restaurant.image }} style={styles.logo} resizeMode="cover" />

          <View style={styles.titleContainer}>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            {restaurant.sponsored && (
              <View style={styles.sponsoredBadge}>
                <Text style={styles.sponsoredText}>Sponsored</Text>
              </View>
            )}
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Ionicons name="restaurant-outline" size={20} color="#666" />
              <Text style={styles.detailText}>{restaurant.type}</Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="star" size={20} color="#FFD700" />
              <Text style={styles.detailText}>{restaurant.rating}</Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="time-outline" size={20} color="#666" />
              <Text style={styles.detailText}>{restaurant.deliveryTime}</Text>
            </View>
          </View>

          <View style={styles.additionalInfo}>
            <View style={styles.infoItem}>
              <Ionicons name="bicycle-outline" size={20} color="#666" />
              <Text style={styles.infoText}>Delivery Fee: {restaurant.deliveryFee}</Text>
            </View>

            <View style={styles.infoItem}>
              <Ionicons name="restaurant-outline" size={20} color="#666" />
              <Text style={styles.infoText}>Kosher Type: {restaurant.kosherType}</Text>
            </View>
          </View>
        </View>

        {/* Menu Placeholder */}
        <View style={styles.menuPlaceholder}>
          <Text style={styles.menuTitle}>Menu</Text>
          <Text style={styles.menuComingSoon}>Menu items coming soon...</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerButton: {
    padding: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  restaurantInfo: {
    padding: 20,
  },
  logo: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  sponsoredBadge: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  sponsoredText: {
    fontSize: 12,
    fontWeight: '500',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    marginLeft: 4,
    fontSize: 16,
    color: '#666',
  },
  additionalInfo: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 16,
    gap: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
  },
  menuPlaceholder: {
    padding: 20,
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  menuComingSoon: {
    color: '#666',
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  backButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RestaurantPage;
