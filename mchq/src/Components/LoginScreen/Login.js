import React,{useState, useContext} from 'react';
import { View, ActivityIndicator } from 'react-native';
import {Ionicons, Octicons} from '@expo/vector-icons';
import KeyboardWrapper from '../KeyboardWrapper';
import axios from 'axios';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../CredentialsContext';

import{StyledContainer, InnerContainer, PageLogo,
   PageTitle, StyledFormArea, LeftSideIcon,
    StyledInputLabel, StyledTextInput, RightSideIcon,
     Colors, InputContainer, StyledButton,
      ButtonText, AlertBox, SplitLine, SubTitle} from '../style.js'

const {primary,brand, darkViolet} = Colors;

const Login= ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

    const handleLogin = (credentials, setSubmitting) => {
      handleMessage(null);
      const url = "https://shrouded-anchorage-39534.herokuapp.com/user/login";
      // const url = "http://192.168.0.220:5000/user/login";

 
      axios.post(url, credentials).then((response) =>{
        const result = response.data;
        const {message, status, data} = result;
        if(status !== 'PASS'){
          handleMessage(message, status);
        }else{
          persistingLogin({...data[0]},message,status);
        }
        setSubmitting(false);
         
      }).catch((error) => {
        console.log(error);
        setSubmitting(false);
        handleMessage("Error: please check your network and try again");
      })
    };

    const handleMessage = (message, type = 'FAIL') => {
      setMessage(message);
      setMessageType(type);
    };

    const persistingLogin = (credentials, message, status) => {

      AsyncStorage.setItem('mchqCredentials',
       JSON.stringify(credentials)).then(() => {

        handleMessage(message, status);
        setStoredCredentials(credentials);

       }).catch((error) => {
         console.log(error);
         handleMessage("Persisting Login error");
       })

    };

    return (
      <KeyboardWrapper>
        <StyledContainer>
            <InnerContainer>
              <PageLogo resizeMode="cover" source={require('../../assets/mchq.png')}/>
              <PageTitle>Mobile College Helper QR</PageTitle>
              <SplitLine/>
              <SubTitle>Login-Screen</SubTitle>
            </InnerContainer>
          <Formik
            initialValues={{email:'', password:''}}
            onSubmit={(values, {setSubmitting}) => {

              if(values.email == '' || values.password == '')
              {
                handleMessage('inputs should not be empty');
                setSubmitting(false);
              }else{
                handleLogin(values,setSubmitting);
              }
                
            }}
            
          >
            
            {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
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
              <AlertBox type={messageType}>{message}</AlertBox>
              {!isSubmitting && (<StyledButton onPress={handleSubmit}>
                <ButtonText>
                  Login
                </ButtonText>
              </StyledButton>)}

              {isSubmitting &&(<StyledButton disabled={true}>
                <ActivityIndicator size="large" color={primary}/>
              </StyledButton>)}

              <SplitLine/>
              <StyledButton onPress={() => navigation.navigate("Register")}>
                <ButtonText>
                  Register if you need an account
                </ButtonText>
              </StyledButton>
              <SplitLine/>
              </StyledFormArea>)}
          </Formik>
        </StyledContainer>
      </KeyboardWrapper>
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