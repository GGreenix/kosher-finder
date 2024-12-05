import { Tabs } from 'expo-router';
import React from 'react';
import TabBarIcon, { FontAwesome } from '@expo/vector-icons';


export default function TabLayout() {

  return (
    <Tabs
    screenOptions={({ route }) => ({
        headerShown: false,
        
        })}>
      <Tabs.Screen
        name="index"
        options={{
          
          title: 'מסך הבית',
          
          tabBarIcon: ({ color }) => (
            <FontAwesome size={35} name = "home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          title: 'יומיומי',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name = "calendar" color={color} />
          ),
        }}
      />
      
    </Tabs>
  );
}
