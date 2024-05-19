import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CoinItem = ({ coin }) => (
  <TouchableOpacity style={styles.containerItem} activeOpacity={0.7}>
    <View style={styles.coinName}>
      <Image source={{ uri: coin.image }} style={styles.image} />
      <View style={styles.containerNames}>
        <Text style={styles.text}>{coin.name}</Text>
        <Text style={styles.textSymbol}>{coin.symbol}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.textPrice}>${coin.current_price}</Text>
      <Text
        style={[
          styles.pricePercentage,
          coin.price_change_percentage_24h > 0
            ? styles.priceUp
            : styles.priceDown,
        ]}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  containerItem: {
    paddingVertical: 9,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: "linear-gradient(to right, #fff, rgba(255, 255, 255, 0.7))", // Fondo con degradado
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontWeight: "bold",
  },
  textPrice: {
    color: "#000",
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#fc4422",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
});

export default CoinItem;
