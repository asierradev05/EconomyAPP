import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const UserScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    // Solicitar permisos para acceder a la galería
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Se requieren permisos para acceder a la galería.');
      return;
    }

    // Seleccionar imagen desde la galería
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
    <LinearGradient colors={['#1E2749', '#283C63']} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={24} color="#fff" />
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
          <View style={styles.infoItem}>
            <Ionicons name="mail-outline" size={24} color="#fff" />
            <Text style={styles.infoText}>angel@example.com</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="call-outline" size={24} color="#fff" />
            <Text style={styles.infoText}>+123 456 7890</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="location-outline" size={24} color="#fff" />
            <Text style={styles.infoText}>San Francisco, CA</Text>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <Text style={styles.settingsTitle}>Settings</Text>
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
            <Text style={styles.settingsText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="lock-closed-outline" size={24} color="#fff" />
            <Text style={styles.settingsText}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="color-palette-outline" size={24} color="#fff" />
            <Text style={styles.settingsText}>Theme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="log-out-outline" size={24} color="#fff" />
            <Text style={styles.settingsText}>Logout</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1E2749',
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  bio: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
  },
  imageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  settingsContainer: {
    marginBottom: 20,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1E2749',
    borderRadius: 10,
    marginBottom: 10,
  },
  settingsText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
});

export default UserScreen;
