import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const InversionesScreen = () => {
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
          <Text style={styles.title}>Welcome to Your Investments!</Text>
          <Text style={styles.subtitle}>Find everything you need to manage your investments here.</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <TouchableOpacity
          style={styles.section}
          onPress={() => handleNavigate('InvestmentCoursesScreen')}
        >
          <Ionicons name="school" size={24} color="#fff" />
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>Investment Courses</Text>
            <Text style={styles.sectionContent}>
              Access customized courses and tutorials about investments, tailored to your level of experience and preferences.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.section}
          onPress={() => handleNavigate('AnalisisCarteraScreen')}
        >
          <Ionicons name="stats-chart" size={24} color="#fff" />
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>Portfolio Analysis</Text>
            <Text style={styles.sectionContent}>
              Get a detailed analysis of your investment portfolio, including diversification, performance, and optimization suggestions.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.section}
          onPress={() => handleNavigate('NoticiasFinancierasScreen')}
        >
          <Ionicons name="newspaper" size={24} color="#fff" />
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>Financial News</Text>
            <Text style={styles.sectionContent}>
              Stay up-to-date with the latest financial news relevant to your investments, filtered according to your interests.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.section}
          onPress={() => handleNavigate('SimuladorInversionScreen')}
        >
          <Ionicons name="calculator" size={24} color="#fff" />
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>Investment Simulator</Text>
            <Text style={styles.sectionContent}>
              Experiment with different investment scenarios and visualize how they could impact your portfolio in the future.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.section}
          onPress={() => handleNavigate('ComunidadInversionistasScreen')}
        >
          <Ionicons name="people" size={24} color="#fff" />
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>Investor Community</Text>
            <Text style={styles.sectionContent}>
              Connect with other investors, share tips and ideas, and collaborate on joint investment projects.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.section}
          onPress={() => handleNavigate('SeguimientoObjetivosScreen')}
        >
          <Ionicons name="clipboard" size={24} color="#fff" />
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>Goals Tracking</Text>
            <Text style={styles.sectionContent}>
              Set and track your investment goals, receiving periodic reminders to stay on track.
            </Text>
          </View>
        </TouchableOpacity>
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
  section: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    flex: 1,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionContent: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
});

export default InversionesScreen;
