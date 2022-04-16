import React,{useState, useContext} from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import {Ionicons, Octicons} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import KeyboardWrapper from '../KeyboardWrapper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../CredentialsContext';

import{StyledContainer, InnerContainer, PageLogo,
   PageTitle, StyledFormArea, LeftSideIcon,
    StyledInputLabel, StyledTextInput, RightSideIcon,
     Colors, InputContainer, StyledButton,
      ButtonText, AlertBox, SplitLine, SubTitle} from '../style.js'

const {primary, brand, darkViolet} = Colors;

const Register= ({navigation}) =>{
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2010, 8, 9));
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);


    //setting date chosen by user
    const [dob, setDob]=useState();
    const onChange = (event, selectedDate) =>
    {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () =>{
        setShow(true);
    }

    const handleSignup = (credentials, setSubmitting) => {
      handleMessage(null);
      const url = "https://shrouded-anchorage-39534.herokuapp.com/user/signup";
      // const url = "http://192.168.0.220:5000/user/signup";

 
      axios.post(url, credentials).then((response) =>{
        const result = response.data;
        const {message, status, data} = result;
        if(status !== 'PASS'){
          handleMessage(message, status);
        }else{
          persistingRegister({...data},message,status);
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

    
    const persistingRegister = (credentials, message, status) => {

      AsyncStorage.setItem('mchqCredentials',
       JSON.stringify(credentials)).then(() => {

        handleMessage(message, status);
        setStoredCredentials(credentials);

       }).catch((error) => {
         console.log(error);
         handleMessage("Persisting Register error");
       })

    };

    return (
      <KeyboardWrapper>       
        <StyledContainer>
                <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../../assets/mchq.png')}/>
                <PageTitle>Mobile College Helper QR</PageTitle>
                <SubTitle>Register</SubTitle>
                </InnerContainer>
            {show && (
            <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode='date'
            is24Hour={true}
            display='default'
            onChange={onChange}
            />
        )}
            <Formik
            initialValues={{name:'', email:'', dateOfBirth:'',password:'', confirmPassword:''}}
            onSubmit={(values, {setSubmitting}) => {
              
              values={...values, dateOfBirth:dob};

              if(values.name == '' || values.email == ''||
               values.dateOfBirth == '' ||
               values.password == ''|| values.confirmPassword == '')
              {
                handleMessage('inputs should not be empty');
                setSubmitting(false);
              }else if(values.password !== values.confirmPassword){
                handleMessage('it does not match the password');
                setSubmitting(false);
              }
              else{
                handleSignup(values,setSubmitting);
              }}}
            >
            {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
            <StyledFormArea>
                <MyTextInput
                label="name:"
                icon="star"
                placeholder="name"
                placeholderTextColor={darkViolet}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
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
                placeholder="MM - DD - YYYY"
                placeholderTextColor={darkViolet}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
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
                <AlertBox type={messageType}>{message}</AlertBox>
                
                {!isSubmitting && (<StyledButton onPress={handleSubmit}>
                <ButtonText>
                  Sign up
                </ButtonText>
              </StyledButton>)}

              {isSubmitting &&(<StyledButton disabled={true}>
                <ActivityIndicator size="large" color={primary}/>
              </StyledButton>)}
                <SplitLine/>
                <StyledButton onPress={() => navigation.goBack()}>
                <ButtonText>
                    Login if you have an account
                </ButtonText>
                </StyledButton>
                </StyledFormArea>)}
            </Formik>
        </StyledContainer>
      </KeyboardWrapper> 
    );
  };

  const MyTextInput = ({label, icon, isDate, showDatePicker, hidePassword, setHidePassword, isPassword, ...props}) => {
    return(      
      <View>
        <InputContainer>
        <LeftSideIcon>
          <Octicons name={icon} size={30} color={brand}/>
        </LeftSideIcon>
        <StyledInputLabel>{label}</StyledInputLabel> 
        {!isDate && <StyledTextInput {...props}/>}
        {isDate && <TouchableOpacity onPress={showDatePicker}>
            <StyledTextInput {...props}/>
            </TouchableOpacity>}
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