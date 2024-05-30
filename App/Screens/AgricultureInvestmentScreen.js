import React from 'react';
import QuestionScreen from '../../components/questionScreen';

const AgricultureInvestmentScreen = ({ navigation }) => (
    <QuestionScreen
      navigation={navigation}
      title="Inversiones en Agricultura"
      questions={[
        '¿Qué tanto conoce sobre inversiones en agricultura?',
        '¿Ha realizado alguna inversión en agricultura anteriormente?',
        '¿Le interesa aprender más sobre inversiones en agricultura?',
        '¿Está familiarizado con los diferentes métodos de inversión en agricultura, como la inversión directa en tierras, acciones de empresas agrícolas, fondos de inversión agrícola, etc.?',
        '¿Conoce los riesgos asociados con las inversiones en agricultura, como la volatilidad de los precios de los productos agrícolas, los impactos climáticos, etc.?',
        '¿Ha realizado alguna investigación previa sobre oportunidades de inversión específicas en el sector agrícola?',
    ]}
    onSubmit={(answers) => {
      console.log('Respuestas del usuario:', answers);
      navigation.goBack();
    }}
  />
);

export default AgricultureInvestmentScreen;
