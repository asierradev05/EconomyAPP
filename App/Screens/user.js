import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, SIZES } from '../../constants/theme';
import InfoItem from '../../components/InfoItem';
import SettingsItem from '../../components/SettingsItem';

const UserScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userData, setUserData] = useState({});

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await AsyncStorage.getItem('userData');
        if (user !== null) {
          setUserData(JSON.parse(user));
        }
      } catch (error) {
        console.error('Error al recuperar los datos del usuario de AsyncStorage:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#1E2749', '#283C63']} style={styles.header}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>User Profile</Text>
        </View>
      </LinearGradient>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={styles.avatar} />
            ) : (
              <Image source={require('../../assets/images/LogoTrasparente.png')} style={styles.avatar} />
            )}
          </TouchableOpacity>
          <Text style={styles.username}>{userData.name} {userData.lastName}</Text>
          <Text style={styles.bio}>Crypto Enthusiast | Finance Guru | Tech Lover</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Account Information</Text>
          <View style={styles.infoItem}>
            <Ionicons name="mail-outline" size={20} color="#1E2749" />
            <Text style={styles.infoText}>{userData.email}</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="call-outline" size={20} color="#1E2749" />
            <Text style={styles.infoText}>{userData.phoneNumber}</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="location-outline" size={20} color="#1E2749" />
            <Text style={styles.infoText}>San Francisco, CA</Text>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <Text style={styles.settingsTitle}>Settings</Text>
          <SettingsItem iconName="notifications-outline" text="Notifications" onPress={() => {}} />
          <SettingsItem iconName="lock-closed-outline" text="Privacy" onPress={() => {}} />
          <SettingsItem iconName="color-palette-outline" text="Theme" onPress={() => {}} />
          <SettingsItem iconName="log-out-outline" text="Logout" onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafa',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#1E2749',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#1E88E5',
    borderWidth: 2,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E2749',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  infoContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E2749',
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#1E2749',
  },
  settingsContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E2749',
    marginBottom: 10,
  },
});

export default UserScreen;
