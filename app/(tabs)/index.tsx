// HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/FirebaseConfig';
import Categories from '../components/Categories';
import { RestaurantCard } from '../components/resturant/ResturantCard';
import { SynagogueCard } from '../components/synagogue/SynagogueCard';
import { MikvahCard } from '../components/mikvah/MikvahCard';
import { styles, synagogueStyles } from '../styles/styles';
// import Header from './Header';
// import PromotionBanner from './PromotionBanner';
import { Category } from '../Types';



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

const HomeScreen: React.FC = () => {
  // State for fetched documents, loading and active category.
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('resturants');

  // Define your categories.
  const categories: Category[] = [
    { id: 'resturants', icon: 'bowl-mix', label: 'Restaurants' },
    { id: 'mikvah', icon: 'shopping', label: 'Mikvah' },
    { id: 'synagogues', icon: 'star-of-david', label: 'Synagogues' },
    { id: 'alcohol', icon: 'beer', label: 'Alcohol' },
  ];

  // Function to fetch documents from Firestore based on the activeCategory.
  const fetchDocuments = async () => {
    setLoading(true);
    try {
      // Use the activeCategory as the collection name.
      const collectionRef = collection(db, activeCategory);
      const querySnapshot = await getDocs(collectionRef);
      const docsArray: any[] = [];
      querySnapshot.forEach((doc) => {
        // Combine the document id with its data.
        docsArray.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(docsArray);
    } catch (error) {
      console.error('Error fetching documents: ', error);
    } finally {
      setLoading(false);
    }
  };

  // Call fetchDocuments whenever the activeCategory changes.
  useEffect(() => {
    fetchDocuments();
  }, [activeCategory]);

  // Render content based on active category.
  const renderContent = () => {
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    if (documents.length === 0) {
      return <Text style={{ textAlign: 'center', marginTop: 20 }}>No data available</Text>;
    }
    console.log(documents.at(0)['city'])
    switch (activeCategory) {
      case 'restaurants':
        return (
          <View style={styles.restaurantsGrid}>
            {documents.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </View>
        );
      case 'synagogues':
        return (
          <View style={synagogueStyles.synagoguesList}>
            {documents.map((synagogue) => (
              <SynagogueCard key={synagogue.id} synagogue={synagogue} />
            ))}
          </View>
        );
      case 'mikvah':
        return (
          <View style={synagogueStyles.synagoguesList}>
            {documents.map((mikvah) => (
              <MikvahCard key={mikvah.id} mikvah={mikvah} />
            ))}
          </View>
        );
      // You can add additional cases for other categories (e.g., "alcohol")
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
        <PromotionBanner />
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
