// components/MikvahCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useRouter } from 'expo-router';
import { Mikvah } from '@/app/Types';
import { styles } from './mikvahStyles';

interface MikvahCardProps {
  mikvah: Mikvah;
}

export const MikvahCard: React.FC<MikvahCardProps> = ({ mikvah }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.mikvahCard}
      onPress={() => router.push(`/components/mikvah/${mikvah.id}`)}
    >
      <Image source={{ uri: mikvah.image }} style={styles.mikvahImage} />
      <View style={styles.mikvahInfo}>
        <Text style={styles.mikvahName}>{mikvah.name}</Text>
        <Text style={styles.address}>{mikvah.address}</Text>
        <Text style={styles.phone}>Phone: {mikvah.phone}</Text>
        <Text style={styles.openingHours}>Hours: {mikvah.openingHours}</Text>
        {mikvah.menSection && <Text style={styles.section}>Men's Section Available</Text>}
        {mikvah.womenSection && <Text style={styles.section}>Women's Section Available</Text>}
      </View>
    </TouchableOpacity>
  );
};
