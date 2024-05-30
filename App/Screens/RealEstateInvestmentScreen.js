import React from 'react';
import QuestionScreen from '../../components/questionScreen';

const RealEstateInvestmentScreen = ({ navigation }) => (
    <QuestionScreen
    title="Inversiones en Bienes Raíces"
    questions={[
      '¿Está familiarizado con los diferentes tipos de inversiones en bienes raíces, como propiedades residenciales, comerciales, industriales o terrenos?',
      '¿Ha considerado invertir en bienes raíces como una forma de ingreso pasivo?',
      '¿Qué opinión tiene sobre la inversión en bienes raíces a largo plazo frente a estrategias de compra y venta rápida?',
      '¿Ha investigado sobre los aspectos legales y financieros involucrados en las inversiones en bienes raíces?',
      '¿Cuál es su enfoque preferido en las inversiones inmobiliarias: alquileres a largo plazo, alquileres vacacionales, flipping de propiedades, desarrollo de proyectos, etc.?',
      '¿Está interesado en invertir en bienes raíces a través de fondos de inversión inmobiliaria (REITs) o plataformas de crowdfunding inmobiliario?',
      '¿Ha evaluado el mercado inmobiliario local o regional para identificar oportunidades de inversión?',
      '¿Qué estrategias de financiamiento ha considerado para sus inversiones en bienes raíces, como préstamos hipotecarios, financiamiento privado, inversionistas asociados, etc.?',
      '¿Ha explorado la posibilidad de invertir en bienes raíces fuera de su país de residencia?',
  ]}
    onSubmit={(answers) => {
      console.log('Respuestas del usuario:', answers);
      navigation.goBack();
    }}
  />
);

export default RealEstateInvestmentScreen;
