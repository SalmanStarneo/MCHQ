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
import { StatusBar } from 'expo-status-bar';

const {brand, darkViolet} = Colors;

const Register= ({navigation}) =>{
    const [hidePassword, setHidePassword] = useState(true);
    return (
      <StyledContainer>
            {/* <InnerContainer>
            <PageLogo resizeMode="cover" source={require('../../assets/mchq.png')}/>
            <PageTitle>Mobile College Helper QR</PageTitle>
            <SubTitle>Register</SubTitle>
            </InnerContainer> */}
        <Formik
          initialValues={{username:'', email:'', dateOfBirth:'',password:'', confirmPassword:''}}
          onSubmit={(values) => {console.log(values);}}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
          <StyledFormArea>
            <MyTextInput
              label="Username:"
              icon="star"
              placeholder="username"
              placeholderTextColor={darkViolet}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
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
              label="Date of Birth:"
              icon="calendar"
              placeholder="YYYY/MM/DD"
              placeholderTextColor={darkViolet}
              onChangeText={handleChange('dateOfBirth')}
              onBlur={handleBlur('dateOfBirth')}
              value={values.dateOfBirth}
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
                        <MyTextInput
              label="Confirm Password:"
              icon="lock"
              placeholder="**********"
              placeholderTextColor={darkViolet}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <AlertBox>...</AlertBox>
            
            <StyledButton onPress={() => navigation.navigate("Login")}>
              <ButtonText>
                Sign up
              </ButtonText>
            </StyledButton>
            <SplitLine/>
            {/* <StyledButton onPress={() => navigation.goBack()}>
              <ButtonText>
                Log in if you have an account
              </ButtonText>
            </StyledButton> */}
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

  export default Register;