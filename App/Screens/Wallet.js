import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, StatusBar, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const WalletScreen = () => {
  const navigation = useNavigation();
  const [balance, setBalance] = useState(1000); // Saldo inicial de ejemplo
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleSend = () => {
    // Lógica para enviar fondos
    const newTransaction = {
      type: 'Send',
      amount: parseFloat(amount),
      recipient,
      timestamp: new Date().toLocaleString(),
    };
    setTransactions([newTransaction, ...transactions]);
    setBalance(balance - parseFloat(amount));
    setRecipient('');
    setAmount('');
  };

  const handleReceive = () => {
    // Lógica para recibir fondos
    const newTransaction = {
      type: 'Receive',
      amount: parseFloat(amount),
      sender: 'Example Sender',
      timestamp: new Date().toLocaleString(),
    };
    setTransactions([newTransaction, ...transactions]);
    setBalance(balance + parseFloat(amount));
    setAmount('');
  };

  return (
    <LinearGradient colors={['#0A1931', '#150E56']} style={styles.container}>
      <StatusBar backgroundColor="#0A1931" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Wallet</Text>
            <Text style={styles.subtitle}>Your Online Wallet</Text>
          </View>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Balance</Text>
          <Text style={styles.balanceAmount}>${balance}</Text>
        </View>

        <View style={styles.transactionsContainer}>
          <Text style={styles.transactionsTitle}>Recent Transactions</Text>
          {transactions.map((transaction, index) => (
            <View key={index} style={styles.transaction}>
              <Ionicons name={transaction.type === 'Send' ? 'arrow-up-outline' : 'arrow-down-outline'} size={24} color="#fff" />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionType}>{transaction.type}</Text>
                <Text style={styles.transactionAmount}>{transaction.amount} USD</Text>
                <Text style={styles.transactionTimestamp}>{transaction.timestamp}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.actions}>
          <Text style={styles.actionTitle}>Send Money</Text>
          <TextInput
            style={styles.input}
            placeholder="Recipient"
            value={recipient}
            onChangeText={setRecipient}
          />
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actions}>
          <Text style={styles.actionTitle}>Receive Money</Text>
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.receiveButton} onPress={handleReceive}>
            <Text style={styles.receiveButtonText}>Receive</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
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
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.7,
  },
  balanceContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: 24,
    color: '#fff',
  },
  transactionsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  transactionsTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionDetails: {
    marginLeft: 10,
  },
  transactionType: {
    fontSize: 16,
    color: '#fff',
  },
  transactionAmount: {
    fontSize: 14,
    color: '#fff',
  },
  transactionTimestamp: {
    fontSize: 12,
    color: '#fff',
  },
  actions: {
    marginBottom: 20,
  },
  actionTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: '#1E88E5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  receiveButton: {
    backgroundColor: '#1E88E5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  receiveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default WalletScreen;
