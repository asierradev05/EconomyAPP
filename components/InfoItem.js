import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';

const InfoItem = ({ iconName, text }) => {
  return (
    <View style={styles.infoItem}>
      <Ionicons name={iconName} size={24} color={COLORS.white} />
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.base,
  },
  infoText: {
    fontSize: SIZES.font,
    color: COLORS.white,
    marginLeft: SIZES.base,
  },
});

export default InfoItem;
