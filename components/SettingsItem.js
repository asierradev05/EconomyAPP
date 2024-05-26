import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';

const SettingsItem = ({ iconName, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
      <Ionicons name={iconName} size={24} color={COLORS.white} />
      <Text style={styles.settingsText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.base,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.base,
  },
  settingsText: {
    fontSize: SIZES.font,
    color: COLORS.white,
    marginLeft: SIZES.base,
  },
});

export default SettingsItem;
