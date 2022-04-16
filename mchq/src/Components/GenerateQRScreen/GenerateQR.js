import React,{useState, useContext} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import KeyboardWrapper from '../KeyboardWrapper';
import axios from 'axios';
import { CredentialsContext } from '../CredentialsContext';


import{StyledContainer, InnerContainer, PageLogo,
   PageTitle, StyledFormArea,StyledInputBox,
    StyledInputLabel, StyledTextInput,
     Colors, InputContainer, StyledButton,
      ButtonText, AlertBox, SplitLine, SubTitle} from '../style.js';

const {primary, brand, darkViolet} = Colors;

const GenerateQR= ({navigation}) =>{
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const {name, email} = storedCredentials;

    // const [dateOfMake,setDateOfMake] = useState('');
    // const todayDate=moment().format('YYYY-MM-DD');
    // setDateOfMake('2020-10-10');

    const handleQRGeneration = (credentials, setSubmitting) => {
      handleMessage(null);
      const url = "https://shrouded-anchorage-39534.herokuapp.com/user/generateQR";
      // const url = "http://192.168.0.220:5000/user/generateQR";
 
      axios.post(url, credentials).then((response) =>{
        const result = response.data;
        const {message, status, data} = result;
        if(status !== 'PASS'){
          handleMessage(message, status);
        }else{
          navigation.navigate('ViewQR',{...data});
          handleMessage(message,status);
        }
        setSubmitting(false);
         
      }).catch((error) => {
        console.log(error);
        setSubmitting(false);
        handleMessage("Error: please check your network and try again "+error);
      })
    };

    const handleMessage = (message, type = 'FAIL') => {
      setMessage(message);
      setMessageType(type);
    };
    
    return (
      <KeyboardWrapper>       
        <StyledContainer>
                <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../../assets/mchq.png')}/>
                <PageTitle>Mobile College Helper QR</PageTitle>
                <SubTitle>GenerateQR: hello {name} </SubTitle>
                </InnerContainer>
            <SplitLine/>

            <Formik
            initialValues={{qrTitle:'', qrContent:'',email:email.toString()}}
            onSubmit={(values, {setSubmitting}) => {
              
              values={...values};

              if(values.qrTitle == ''|| values.qrContent == '')
              {
                handleMessage('inputs should not be empty');
                setSubmitting(false);
              }else{
                handleQRGeneration(values,setSubmitting);
              }}}
            >
            {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
            <StyledFormArea>
              <SplitLine/>
                <MyTextInput
                label="Title:"
                placeholder="Title"
                placeholderTextColor={darkViolet}
                onChangeText={handleChange('qrTitle')}
                onBlur={handleBlur('qrTitle')}
                value={values.qrTitle}
                />
                
                <MyInputBox
                label="Content:"
                placeholder="content of box"
                placeholderTextColor={darkViolet}
                onChangeText={handleChange('qrContent')}
                onBlur={handleBlur('qrContent')}
                value={values.qrContent}
                />

                <MyTextInput
                editable={false}
                display="none"
                onChangeText={handleChange(email)}
                onBlur={handleBlur(email)}
                value={values.email}
                />

                <AlertBox type={messageType}>{message}</AlertBox>
                <SplitLine/>

                {!isSubmitting && (<StyledButton onPress={handleSubmit}>
                <ButtonText>
                  Generate QR code
                </ButtonText>
              </StyledButton>)}

              {isSubmitting &&(<StyledButton disabled={true}>
                <ActivityIndicator size="large" color={primary}/>
              </StyledButton>)}
                <SplitLine/>
                <StyledButton onPress={() => navigation.goBack()}>
                <ButtonText>
                    Back to main screen
                </ButtonText>
                </StyledButton>
                </StyledFormArea>)}
            </Formik>
        </StyledContainer>
      </KeyboardWrapper> 
    );
  };

  const MyTextInput = ({label, ...props}) => {
    return(      
      <View>
        <InputContainer>
        <StyledInputLabel>{label}</StyledInputLabel> 
            <StyledTextInput {...props}/>
        </InputContainer>
      </View>
    );
  };

  const MyInputBox = ({label, ...props}) => {
    return(      
      <View>
        <InputContainer>
        <StyledInputLabel>{label}</StyledInputLabel> 
            
            <StyledInputBox multiline {...props}/>
        </InputContainer>
      </View>
    );
  };

  export default GenerateQR;