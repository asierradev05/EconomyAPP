import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const InvestmentCoursesScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <LinearGradient colors={['#0A1931', '#150E56']} style={styles.container}>
      <StatusBar backgroundColor="#0A1931" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Investment Courses</Text>
          <Text style={styles.subtitle}>Discover the secrets of successful investing</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <TouchableOpacity
          style={styles.courseCard}
          onPress={() => handleNavigate('Curso1Screen')}
        >
          <Image
            source={require('../../assets/images/Cryptocurrency.jpg')}
            style={styles.courseImage}
          />
          <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>Financial Planning</Text>
            <Text style={styles.courseDescription}>Learn how to create a solid financial plan to achieve your investment goals.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.courseCard}
          onPress={() => handleNavigate('Curso2Screen')}
        >
          <Image
            source={require('../../assets/images/InvestmentSraegies.jpg')}
            style={styles.courseImage}
          />
          <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>Risk Management</Text>
            <Text style={styles.courseDescription}>Master the art of managing risks in your investment portfolio.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.courseCard}
          onPress={() => handleNavigate('Curso3Screen')}
        >
          <Image
            source={require('../../assets/images/StockMarket.jpg')}
            style={styles.courseImage}
          />
          <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>Asset Allocation</Text>
            <Text style={styles.courseDescription}>Learn how to diversify your investments for optimal returns.</Text>
          </View>
        </TouchableOpacity>

        {/* Add more course cards here */}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  courseCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    overflow: 'hidden',
  },
  courseImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  courseInfo: {
    flex: 1,
    padding: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  courseDescription: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
});

export default InvestmentCoursesScreen;
