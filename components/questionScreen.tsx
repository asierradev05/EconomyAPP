import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const QuestionScreen = ({ title, questions, onSubmit }) => {
  const navigation = useNavigation();

  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButtonStyle}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity style={styles.notificationButtonStyle}>
          <Ionicons name="notifications-outline" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {questions.map((question, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.questionText}>{question}</Text>
            <View style={styles.optionsContainer}>
              {[1, 2, 3, 4, 5].map((value) => (
                <TouchableOpacity
                  key={value}
                  style={[
                    styles.optionButton,
                    answers[index] === value && styles.selectedOptionButton,
                  ]}
                  onPress={() => handleAnswerChange(index, value)}
                >
                  <Text
                    style={[
                      styles.optionButtonText,
                      answers[index] === value && styles.selectedOptionButtonText,
                    ]}
                  >
                    {value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E2749',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButtonStyle: {
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  notificationButtonStyle: {
    padding: 10,
  },
  scrollContainer: {
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionButton: {
    backgroundColor: '#E5E5E5',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectedOptionButton: {
    backgroundColor: '#1565C0',
  },
  optionButtonText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  selectedOptionButtonText: {
    color: '#FFFFFF',
  },
  submitButton: {
    backgroundColor: '#1565C0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default QuestionScreen;
