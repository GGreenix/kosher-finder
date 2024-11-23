import { Tabs } from 'expo-router';
import React from 'react';



export default function TabLayout() {

  return (
    <Tabs
    screenOptions={({ route }) => ({
        headerShown: false,
        
        })}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="TimesOfDayPage"
        options={{
          title: 'times-of-day',
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'time' : 'time-outline'} color={color} />
          // ),
        }}
      />
      
    </Tabs>
  );
}
