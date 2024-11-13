import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import { Icon } from "react-native-vector-icons/Icon";

import { Image } from 'react-native';
import { synagogueStyles } from "./styles";
import { Synagogue } from "./Types";
// SynagogueCard.tsx
interface SynagogueCardProps {
    synagogue: Synagogue;
  }
  
  export const SynagogueCard: React.FC<SynagogueCardProps> = ({ synagogue }) => (
    <TouchableOpacity style={synagogueStyles.synagogueCard}>
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