import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { COLORS, SIZES } from '../../constants/theme';
import InfoItem from '../../components/InfoItem';
import SettingsItem from '../../components/SettingsItem';

const UserScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Se requieren permisos para acceder a la galería.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <LinearGradient colors={[COLORS.primary, COLORS.secondary]} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Profile</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={styles.avatar} />
            ) : (
              <Image source={require('../../assets/images/LogoTrasparente.png')} style={styles.avatar} />
            )}
          </TouchableOpacity>
          <Text style={styles.username}>Angel</Text>
          <Text style={styles.bio}>Crypto Enthusiast | Finance Guru | Tech Lover</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Account Information</Text>
          <InfoItem iconName="mail-outline" text="angel@example.com" />
          <InfoItem iconName="call-outline" text="+123 456 7890" />
          <InfoItem iconName="location-outline" text="San Francisco, CA" />
        </View>
        <View style={styles.settingsContainer}>
          <Text style={styles.settingsTitle}>Settings</Text>
          <SettingsItem iconName="notifications-outline" text="Notifications" onPress={() => {}} />
          <SettingsItem iconName="lock-closed-outline" text="Privacy" onPress={() => {}} />
          <SettingsItem iconName="color-palette-outline" text="Theme" onPress={() => {}} />
          <SettingsItem iconName="log-out-outline" text="Logout" onPress={() => {}} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.primary,
  },
  backButton: {
    marginRight: SIZES.base,
  },
  headerTitle: {
    fontSize: SIZES.font * 1.25,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  content: {
    padding: SIZES.padding,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: SIZES.padding,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: SIZES.base,
  },
  username: {
    fontSize: SIZES.font * 1.5,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  bio: {
    fontSize: SIZES.font,
    color: COLORS.lightGray,
    textAlign: 'center',
  },
  imageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  infoContainer: {
    marginBottom: SIZES.padding,
  },
  infoTitle: {
    fontSize: SIZES.font * 1.125,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SIZES.base,
  },
  settingsContainer: {
    marginBottom: SIZES.padding,
  },
  settingsTitle: {
    fontSize: SIZES.font * 1.125,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SIZES.base,
  },
});

export default UserScreen;
