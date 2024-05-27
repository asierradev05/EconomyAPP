import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const InversionesScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  const sections = [
    { name: 'Investment Courses', description: 'Access customized courses and tutorials about investments, tailored to your level of experience and preferences.', color: '#1E88E5', icon: 'school' },
    { name: 'Portfolio Analysis', description: 'Get a detailed analysis of your investment portfolio, including diversification, performance, and optimization suggestions.', color: '#FF6F61', icon: 'stats-chart' },
    { name: 'Financial News', description: 'Stay up-to-date with the latest financial news relevant to your investments, filtered according to your interests.', color: '#FFD166', icon: 'newspaper' },
    { name: 'Investment Simulator', description: 'Experiment with different investment scenarios and visualize how they could impact your portfolio in the future.', color: '#06D6A0', icon: 'calculator' },
    { name: 'Investor Community', description: 'Connect with other investors, share tips and ideas, and collaborate on joint investment projects.', color: '#E63946', icon: 'people' },
    { name: 'Goals Tracking', description: 'Set and track your investment goals, receiving periodic reminders to stay on track.', color: '#118AB2', icon: 'clipboard' },
  ];

  return (
    <LinearGradient colors={['#0A1931', '#150E56']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to Your Investments!</Text>
          <Text style={styles.subtitle}>Find everything you need to manage your investments here.</Text>
        </View>
      </View>

      <View style={styles.content}>
        {sections.map((section, index) => (
          <View key={index} style={[styles.section, index % 2 === 0 ? styles.leftSection : styles.rightSection]}>
            <TouchableOpacity
              style={[styles.sectionButton, { backgroundColor: section.color }]}
              onPress={() => handleNavigate(section.name)}
            >
              <Ionicons name={section.icon} size={24} color="#fff" />
            </TouchableOpacity>
            <View style={styles.sectionText}>
              <Text style={styles.sectionName}>{section.name}</Text>
              <Text style={styles.sectionDescription}>{section.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
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
    marginTop: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  leftSection: {
    justifyContent: 'flex-start',
  },
  rightSection: {
    justifyContent: 'flex-end',
  },
  sectionButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionText: {
    flex: 1,
    marginLeft: 10,
  },
  sectionName: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
  },
  sectionDescription: {
    fontSize: 12,
    color: '#fff',
  },
});

export default InversionesScreen;
