// SynagogueCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Synagogue } from '../Types';
import { synagogueStyles } from '../styles/styles';
import { useRouter } from 'expo-router';

interface SynagogueCardProps {
  synagogue: Synagogue;
}

export const SynagogueCard: React.FC<SynagogueCardProps> = ({ synagogue }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={synagogueStyles.synagogueCard}
      onPress={() => router.push(`/synagogue/${synagogue.id}`)}
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
