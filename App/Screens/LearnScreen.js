import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ProgressBarAndroid } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LearnScreen = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0.4); // Example progress value
  const [activities, setActivities] = useState([
    { title: 'Introduction to Stock Market', points: 5000, completed: false },
    { title: 'Understanding Mutual Funds', points: 1000, completed: false }
  ]);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#1E2749', '#283C63']} style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu-outline" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Inicio</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </LinearGradient>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <Text style={styles.greeting}>¡Hola!</Text>
          <Text style={styles.username}>SOFIA</Text>
          <Image source={require('../../assets/images/ImagenMuchacha.png')} style={styles.avatar} />
        </View>
        <View style={styles.pointsContainer}>
          <View style={styles.pointItem}>
            <Ionicons name="star-outline" size={24} color="#FFA500" />
            <Text style={styles.pointsText}>5000</Text>
          </View>
          <View style={styles.pointItem}>
            <Ionicons name="calendar-outline" size={24} color="#FFA500" />
            <Text style={styles.pointsText}>10/30</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Próximo objetivo</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Ionicons name="stats-chart-outline" size={32} color="#FFA500" />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Mastering Stock Trading</Text>
              <Text style={styles.cardSubtitle}>Te faltan 1200 puntos</Text>
              <ProgressBarAndroid styleAttr="Horizontal" color="#FFA500" indeterminate={false} progress={progress} />
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tus actividades</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>Ver todos</Text>
          </TouchableOpacity>
        </View>
        {activities.map((activity, index) => (
          <View key={index} style={styles.activityCard}>
            <Ionicons name="checkmark-circle-outline" size={32} color="#FFA500" />
            <View style={styles.activityTextContainer}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activitySubtitle}>{`Tu padre te ha asignado`}</Text>
            </View>
            <TouchableOpacity style={styles.completeButton}>
              <Ionicons name="checkmark-outline" size={24} color={activity.completed ? '#27AE60' : '#E5E5E5'} />
            </TouchableOpacity>
          </View>
        ))}
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
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuButton: {
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  notificationButton: {
    padding: 10,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  greeting: {
    fontSize: 18,
    color: '#333',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500',
    marginLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  pointItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 5,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#1E88E5',
    borderRadius: 20,
    padding: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  activityCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  activityTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activitySubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  completeButton: {
    padding: 10,
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

export default LearnScreen;
