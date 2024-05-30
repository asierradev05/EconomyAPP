import React from 'react';
import QuestionScreen from '../../components/questionScreen';

const EducationInvestmentScreen = ({ navigation }) => (
    <QuestionScreen
      navigation={navigation}
      title="Inversiones en Educación"
      questions={[
        '¿Qué tanto conoce sobre inversiones en educación?',
        '¿Ha realizado alguna inversión en educación anteriormente?',
        '¿Le interesa aprender más sobre inversiones en educación?',
        '¿Está familiarizado con los diferentes tipos de inversiones en educación, como fondos de ahorro para la universidad, inversiones en programas de capacitación profesional, inversiones en instituciones educativas, etc.?',
        '¿Conoce los beneficios fiscales asociados con ciertas inversiones en educación, como cuentas de ahorro para la universidad con ventajas impositivas?',
        '¿Ha investigado sobre las tendencias y oportunidades de inversión emergentes en el sector educativo, como la tecnología educativa, las plataformas de aprendizaje en línea, etc.?',
    ]}
    onSubmit={(answers) => {
      console.log('Respuestas del usuario:', answers);
      navigation.goBack();
    }}
  />
);

export default EducationInvestmentScreen;
