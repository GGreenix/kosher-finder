// SynagogueCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useRouter } from 'expo-router';
import { synagogueStyles } from '@/app/styles/styles';
import { Synagogue } from '@/app/Types';

interface SynagogueCardProps {
  synagogue: Synagogue;
}

export const SynagogueCard: React.FC<SynagogueCardProps> = ({ synagogue }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={synagogueStyles.synagogueCard}
      onPress={() => router.push(`/components/synagogue/${synagogue.id}`)}
    >
      <Image source={{ uri: synagogue.image }} style={synagogueStyles.synagogueImage} />
      <View style={synagogueStyles.synagogueInfo}>
        <Text style={synagogueStyles.synagogueName}>{synagogue.name}</Text>
        <View style={synagogueStyles.synagogueDetails}>
          <Text style={synagogueStyles.synagogueType}>{synagogue.type}</Text>
          <View style={synagogueStyles.prayerInfo}>
            <Text style={synagogueStyles.nextPrayer}>{synagogue.nextPrayer}</Text>
            <Text style={synagogueStyles.prayerTime}>{synagogue.prayerTime}</Text>
          </View>
        </View>
        <Text style={synagogueStyles.rabbiName}>Rabbi: {synagogue.rabbi}</Text>
        <Text style={synagogueStyles.address}>{synagogue.address}</Text>
      </View>
    </TouchableOpacity>
  );
};
