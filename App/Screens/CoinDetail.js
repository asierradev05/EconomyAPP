import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ProgressBarAndroid, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const CoinDetail = ({ route, navigation }) => {
  const { coin } = route.params;
  const progress = 0.4; // Example progress value

  // Determinar si el precio ha aumentado o disminuido en las últimas 24 horas
  const priceChangeColor = coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown;

  // Descripción de lo que ha pasado con la moneda
  const priceChangeText = coin.price_change_percentage_24h > 0
    ? 'El precio ha aumentado en un ' + coin.price_change_percentage_24h.toFixed(2) + '% en las últimas 24 horas.'
    : 'El precio ha disminuido en un ' + Math.abs(coin.price_change_percentage_24h).toFixed(2) + '% en las últimas 24 horas.';

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#1E2749', '#283C63']} style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Detalle de Moneda</Text>
        <View style={{ width: 24 }}></View>
      </LinearGradient>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.coinContainer}>
          <Image source={{ uri: coin.image }} style={styles.image} />
          <View style={styles.coinDetails}>
            <Text style={styles.name}>{coin.name}</Text>
            <Text style={styles.symbol}>{coin.symbol}</Text>
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.label}>Precio</Text>
          <Text style={[styles.value, priceChangeColor]}>${coin.current_price}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.label}>Capitalización de Mercado</Text>
          <Text style={styles.value}>${coin.market_cap}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.label}>Máximo en 24h</Text>
          <Text style={styles.value}>${coin.high_24h}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.label}>Mínimo en 24h</Text>
          <Text style={styles.value}>${coin.low_24h}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.label}>Volumen en 24h</Text>
          <Text style={styles.value}>${coin.total_volume}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.description}>{priceChangeText}</Text>
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Progreso de Meta</Text>
          <ProgressBarAndroid styleAttr="Horizontal" color="#FFA500" indeterminate={false} progress={progress} />
        </View>
        {/* Agrega más detalles aquí */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  backButton: {
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  coinDetails: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  symbol: {
    fontSize: 18,
    color: '#333',
    opacity: 0.7,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    opacity: 0.7,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceUp: {
    color: '#00B589', // Verde para aumento de precio
  },
  priceDown: {
    color: '#fc4422', // Rojo para disminución de precio
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  progressContainer: {
    marginTop: 20,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

export default CoinDetail;
