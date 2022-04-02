import React from 'react';
import { View } from 'react-native';
// import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import{
  StyledContainer, InnerContainer, PageLogo,
  PageTitle, StyledFormArea, LeftSideIcon, 
  StyledInputLabel, StyledTextInput, RightSideIcon
} from './../styles/style';

const Login= ({navigation}) =>{
    return (
      <StyledContainer>
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('../../assets/mchq.png')}/>
          <PageTitle>Mobile College Helper QR</PageTitle>
        </InnerContainer>
        <Text style={styles.texts}>MCHQ Login app screen</Text>
        <Formik
          initialValues={{email:'', password:''}}
          onSubmit={(values) => {console.log(values);}}
        >
          {(handleChange, handleBlur, handleSubmit, values) => <StyledFormArea></StyledFormArea>}
        </Formik>
        <Button title='log in' onPress={() => navigation.navigate("Main")}/>
      </StyledContainer>
    );
  };

  const MyTextInput = ({label, icon, ...props}) => {
    return(
      <View>

      </View>
    );
  };
  export default Login;