// Categories.tsx
import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Category } from '../Types';


// Categories.tsx
interface CategoriesProps {
    categories: Category[];
    onSelectCategory: (categoryId: string) => void; // Set correct type for onSelectCategory
    activeCategory: string;
  }
  
  const Categories: React.FC<CategoriesProps> = ({ categories, onSelectCategory, activeCategory = '' }) => (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.categoriesContainer}
    >
      {categories.map((category) => (
        <TouchableOpacity 
          key={category.id} 
          style={[
            styles.categoryItem, 
            activeCategory === category.id && styles.activeCategoryItem // Apply style for active category
          ]}
          onPress={() => onSelectCategory(category.id)} // Set selected category on press
        >
          <Text style={styles.categoryLabel}>{category.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  export default Categories;

const styles = StyleSheet.create({
    categoriesContainer: {
      flexDirection: 'row',
      marginVertical: 10,
    },
    categoryItem: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
      marginRight: 10,
    },
    activeCategoryItem: {
      backgroundColor: '#007AFF', // Color for active category
    },
    categoryLabel: {
      color: '#333',
      fontWeight: 'bold',
    },
  });