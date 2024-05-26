import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { inversions } from '../../constants';

const IndexScreen = () => {
  const navigation = useNavigation();

  const navigateToCryptos = () => {
    navigation.navigate('cryptosIndex');
  };

  const navigateToProfile = () => {
    navigation.navigate('UserScreen');
  };
  const inversions = () => {
    navigation.navigate('InversionsScreen');
  };
  const NavigateWallet = () => {
    navigation.navigate('WalletScreen');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#1E2749', '#283C63']} style={styles.header}>
        <Text style={styles.greetingText}>Hi, Angel</Text>
        <Text style={styles.questionText}>What would you like to learn today?</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#CCCCCC" />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search-outline" size={24} color="#CCCCCC" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.learningContainer}>
          <View style={styles.learningTextContainer}>
            <Text style={styles.learningText}>Start Learning new Stuff</Text>
            <View style={styles.categoriesContainer}>
              <Text style={styles.categoriesText}>Categories</Text>
              <TouchableOpacity style={styles.categoriesButton}>
                <Ionicons name="list-outline" size={24} color="#CCCCCC" />
              </TouchableOpacity>
            </View>
          </View>
          <Image source={require('../../assets/images/ImagenMuchacha.png')} style={styles.learningImage} />
        </View>
        <Text style={styles.utilitiesTitle}>Your Utilities</Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View>
                <TouchableOpacity style={styles.cardTextContainer} onPress={navigateToCryptos}>
                  <Ionicons name="list-outline" size={24} color="#CCCCCC" />
                  <Text style={styles.cardTitle}>Cryptos</Text>
                  <Text style={styles.cardDescription}>Check The Latest Cryptos!</Text>
                </TouchableOpacity>
              </View>
              <Image source={require('../../assets/images/CryptoLogo.png')} style={styles.utilityImage} />
            </View>
          </View>
          
          <TouchableOpacity style={styles.card} onPress={NavigateWallet}>
            <Image source={require('../../assets/images/WalletLogo.png')} style={styles.utilityImage} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Your Wallet</Text>
              <Text style={styles.cardDescription}>Check Your Finance</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home-outline" size={28} color="#1E88E5" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}onPress={inversions}>
          <Ionicons name="stats-chart-outline" size={28} color="#1E88E5" />
          <Text style={styles.navText}>Inversions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={navigateToProfile}>
          <Ionicons name="person-outline" size={28} color="#1E88E5" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafa',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#1E2749',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  greetingText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionText: {
    fontSize: 18,
    color: '#CCCCCC',
    marginTop: 5,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    color: '#1E2749',
  },
  searchButton: {
    padding: 10,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  learningContainer: {
    marginTop: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  learningTextContainer: {
    flex: 1,
  },
  learningText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E2749',
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  categoriesText: {
    fontSize: 14,
    color: '#1E2749',
    marginRight: 10,
  },
  categoriesButton: {
    backgroundColor: '#1E88E5',
    borderRadius: 25,
    padding: 10,
  },
  learningImage: {
    width: 100,
    height: 100,
    marginLeft: 20,
  },
  utilitiesTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E2749',
    marginTop: 20,
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  utilityImage: {
    width: 100,
    height: 100,
  },
  cardTextContainer: {
    marginLeft: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E2749',
  },
  cardDescription: {
    fontSize: 14,
    color: '#1E2749',
    marginTop: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1E2749',
  },
});

export default IndexScreen;
