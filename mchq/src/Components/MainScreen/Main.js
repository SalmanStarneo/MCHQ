import React,{useState} from 'react';
// import { View } from 'react-native';
// import {Ionicons, Octicons} from '@expo/vector-icons';
// import { MainContainer } from 'formik';
import{MainContainer, InnerContainer, 
      PageLogo, PageTitle, StyledFormArea,
      Colors, InputContainer, StyledButton, UserImage,
      ButtonText, SplitLine, SubTitle, HeaderImage} from '../style.js'
// import { StatusBar } from 'expo-status-bar';

const {brand, darkViolet} = Colors;

const Main= ({navigation}) =>{
    const [hidePassword, setHidePassword] = useState(true);
    return (
      <InnerContainer main={true}>
        <HeaderImage resizeMode="cover" source={require('../../assets/header.jpg')}/>
        <MainContainer>
        <PageTitle >Mobile College Helper QR</PageTitle>
          <SplitLine/>
          <SubTitle>Main-Screen</SubTitle>
          <StyledFormArea>
            <UserImage resizeMode="cover" source={require('../../assets/mchq.png')}/>
            <SplitLine/>
              <StyledButton onPress={()=>navigation.navigate("Login")}>
                <ButtonText>
                  Log out
                </ButtonText>
              </StyledButton>
          </StyledFormArea>
        </MainContainer>
    </InnerContainer>
    );
  };

  export default Main;