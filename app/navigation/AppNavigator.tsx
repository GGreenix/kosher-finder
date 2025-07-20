import { NavigationContainer } from '@react-navigation/native';
import RestaurantScreen from '../screens/RestaurantScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Restaurants' }}
        />
        <Stack.Screen 
          name="Restaurant" 
          component={RestaurantScreen} 
          options={{ title: 'Restaurant Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 