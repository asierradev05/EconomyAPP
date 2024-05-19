import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import CoinItem from "../../components/CoinItem";

const Cryptos = ({ navigation }) => {
  const [coins, setCoins] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [searchVisible, setSearchVisible] = useState(true); // Inicialmente visible

  useEffect(() => {
    loadData(); // Llama a la función aquí
  }, []);

  const loadData = async () => {
    console.log("Starting data load");
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      console.log("Response received:", res);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Data received:", data);
      setCoins(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    // Si el usuario ha hecho scroll hacia arriba y ha llegado al principio de la lista, mostramos el campo de búsqueda
    setSearchVisible(currentOffset <= 0);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cryptos
            <Text> </Text>
        </Text>
        
        <Text style={styles.subtitle}>The last prices in the Crypto Market
        </Text>
        
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={['#0A1931', '#150E56']}
      style={styles.container}
    >
      <StatusBar backgroundColor="#0A1931" />

      {renderHeader()}

      {searchVisible && ( // Mostrar el campo de búsqueda solo cuando es visible
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search a Coin"
            placeholderTextColor="#858585"
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      )}

      <FlatList
        style={styles.list}
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CoinItem coin={item} />}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.7,
    marginTop: 5,
  },
  searchContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchInput: {
    width: "100%",
    color: "#fff",
    backgroundColor: "#1E2749",
    borderColor: "#1E2749",
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  list: {
    width: "100%",
  },
});

export default Cryptos;
