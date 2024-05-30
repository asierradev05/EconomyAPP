import React from 'react';
import QuestionScreen from '../../components/questionScreen';

const OthersInvestmentScreen = ({ navigation }) => (
  <QuestionScreen
    title="Inversiones en Otros Temas de Inversión"
    questions={[
      '¿Qué tan familiarizado está con inversiones en bienes raíces?',
      '¿Ha considerado invertir en el mercado de valores?',
      '¿Qué opinión tiene sobre inversiones en criptomonedas?',
      '¿Ha explorado oportunidades de inversión en startups o empresas emergentes?',
      '¿Está interesado en invertir en arte, colecciones o bienes de lujo?',
      '¿Ha considerado inversiones en energías renovables o tecnología verde?',
      '¿Qué piensa sobre invertir en bienes raíces comerciales, como oficinas, centros comerciales o espacios industriales?',
      '¿Ha investigado sobre inversiones en el sector de la salud o la biotecnología?',
      '¿Está interesado en invertir en materias primas, como oro, plata o petróleo?',
      '¿Ha considerado la posibilidad de invertir en fondos de inversión o ETFs para diversificar su cartera?',
    ]}
    onSubmit={(answers) => {
      console.log('Respuestas del usuario:', answers);
      navigation.goBack();
    }}
  />
);

export default OthersInvestmentScreen;
