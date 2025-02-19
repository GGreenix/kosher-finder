import { Restaurant } from '@/app/Types';
import React, { createContext, useContext, useState } from 'react';


interface RestaurantContextProps {
    restaurant: Restaurant | null;
    setRestaurant: (restaurant: Restaurant) => void;
  }
  
  const RestaurantContext = createContext<RestaurantContextProps>({
    restaurant: null,
    setRestaurant: () => {},
  });
  
  export const useRestaurant = () => useContext(RestaurantContext);
  
  export const RestaurantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
    return (
      <RestaurantContext.Provider value={{ restaurant, setRestaurant }}>
        {children}
      </RestaurantContext.Provider>
    );
  };