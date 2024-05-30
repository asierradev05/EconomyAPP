import React from 'react';
import QuestionScreen from '../../components/questionScreen';

const TechnologyInvestmentScreen = ({ navigation }) => (
    <QuestionScreen
    title="Inversiones en Tecnología"
    questions={[
      '¿Qué tanto conoce sobre inversiones en tecnología?',
      '¿Ha realizado alguna inversión en tecnología anteriormente?',
      '¿Le interesa aprender más sobre inversiones en tecnología?',
      '¿Está familiarizado con los diferentes sectores de la tecnología en los que se puede invertir, como inteligencia artificial, tecnología blockchain, biotecnología, fintech, etc.?',
      '¿Qué opinión tiene sobre la volatilidad del mercado tecnológico y cómo afecta sus decisiones de inversión?',
      '¿Ha investigado sobre empresas tecnológicas específicas en las que esté interesado en invertir?',
      '¿Qué estrategias de inversión en tecnología ha considerado, como invertir en acciones individuales, fondos de inversión tecnológica, startups, etc.?',
      '¿Está al tanto de las tendencias emergentes en tecnología que podrían representar oportunidades de inversión en el futuro cercano?',
      '¿Cómo evalúa el riesgo y la rentabilidad al invertir en tecnología en comparación con otros sectores?',
  ]}
    onSubmit={(answers) => {
      console.log('Respuestas del usuario:', answers);
      navigation.goBack();
    }}
  />
);

export default TechnologyInvestmentScreen;
