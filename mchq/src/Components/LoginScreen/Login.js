import React from 'react';
import { View } from 'react-native';
import {Octicons} from '@expo/vector-icons';
import { Formik } from 'formik';
import{
  StyledContainer, InnerContainer, PageLogo,
  PageTitle, StyledFormArea, LeftSideIcon, 
  StyledInputLabel, StyledTextInput, RightSideIcon, Colors
} from './../styles/style';

const {brand, darkViolet} = Colors;

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
          {(handleChange, handleBlur, handleSubmit, values) => 
          <StyledFormArea>
            <MyTextInput
              label="Email:"
              icon="mail"
              placeholder="user email"
              placeholderTextColor={darkViolet}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            <MyTextInput
              label="Password:"
              icon="lock"
              placeholder="**********"
              placeholderTextColor={darkViolet}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            />
            </StyledFormArea>}
        </Formik>
        <Button title='log in' onPress={() => navigation.navigate("Main")}/>
      </StyledContainer>
    );
  };

  const MyTextInput = ({label, icon, ...props}) => {
    return(
      <View>
        <LeftSideIcon>
          <Octicons name={icon} size={30} color={brand}/>
        </LeftSideIcon>
        <StyledInputLabel>{label}</StyledInputLabel> 
        <StyledTextInput {...props}/>
      </View>
    );
  };
  export default Login;