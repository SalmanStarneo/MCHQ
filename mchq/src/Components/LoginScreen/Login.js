import React,{useState} from 'react';
import { View } from 'react-native';
import {Ionicons, Octicons} from '@expo/vector-icons';
import { Formik } from 'formik';
import{StyledContainer, InnerContainer, PageLogo,
   PageTitle, StyledFormArea, LeftSideIcon,
    StyledInputLabel, StyledTextInput, RightSideIcon,
     Colors, InputContainer, StyledButton,
      ButtonText, AlertBox, SplitLine,
     ExtraView, ExtraText, SubTitle} from '../style.js'

const {brand, darkViolet} = Colors;

const Login= ({navigation}) =>{
    const [hidePassword, setHidePassword] = useState(true);
    return (
      <StyledContainer>
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('../../assets/mchq.png')}/>
          <PageTitle>Mobile College Helper QR</PageTitle>
          <SplitLine/>
          <SubTitle>Login-Screen</SubTitle>
        </InnerContainer>
        <Formik
          initialValues={{email:'', password:''}}
          onSubmit={(values) => {console.log(values);}}
        >
          
          {({handleChange, handleBlur, handleSubmit, values}) => (
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
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <AlertBox>...</AlertBox>
            <StyledButton onPress={handleSubmit}>
              <ButtonText>
                Login
              </ButtonText>
            </StyledButton>
            <SplitLine/>
            <StyledButton onPress={handleSubmit}>
              <ButtonText>
                Register
              </ButtonText>
            </StyledButton>
            </StyledFormArea>)}
        </Formik>
      </StyledContainer>
    );
  };

  const MyTextInput = ({label, icon, hidePassword, setHidePassword, isPassword, ...props}) => {
    return(
      <View>
        <InputContainer>
        <LeftSideIcon>
          <Octicons name={icon} size={30} color={brand}/>
        </LeftSideIcon>
        <StyledInputLabel>{label}</StyledInputLabel> 
        <StyledTextInput {...props}/>
        {
          isPassword && (
            <RightSideIcon onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkViolet} />
            </RightSideIcon>
          )
        }
        </InputContainer>
      </View>
    );
  };

  export default Login;