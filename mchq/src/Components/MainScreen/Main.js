import React,{useContext} from 'react';
import { ScrollView } from 'react-native';
// import {Ionicons, Octicons} from '@expo/vector-icons';
import{InnerContainer, 
      PageLogo, PageTitle, StyledFormArea,
      Colors, InputContainer, StyledButton, UserImage,
      ButtonText, SplitLine, SubTitle, HeaderImage, MainContainer} from '../style.js'
// import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../CredentialsContext';

const {brand, darkViolet} = Colors;

const Main= ({navigation}) =>{
    
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const {name, email} = storedCredentials;

    const clearLogin = () => {
      AsyncStorage.removeItem('mchqCredentials').then(() => {
        setStoredCredentials("");
      }).catch(error => console.log(error))
    }

    return (
      <InnerContainer main={true}>
        <HeaderImage resizeMode="cover" source={require('../../assets/th.jpg')}/>
        <SplitLine/>
        <PageTitle>Mobile College Helper QR</PageTitle>
        <ScrollView>
          <MainContainer>
            <SplitLine/>
            <UserImage resizeMode="cover" source={require('../../assets/th.jpg')}/>
            <SplitLine/>
            <SubTitle>{name ||"Main-Screen"}</SubTitle>
            <SubTitle>{email ||"View your attendance"}</SubTitle>
            <StyledFormArea>
            <StyledButton main={true} onPress={() => navigation.navigate('ScanQR')}>
                  <ButtonText>
                    Scan QR
                  </ButtonText>
                </StyledButton>
                <StyledButton main={true} onPress={() => navigation.navigate('GenerateQR')}>
                  <ButtonText>
                    Generate QR
                  </ButtonText>
                </StyledButton>
                <StyledButton main={true} onPress={() => navigation.navigate('ListQR',storedCredentials)}>
                  <ButtonText>
                    View generated QR
                  </ButtonText>
                </StyledButton>
                <StyledButton main={true} onPress={clearLogin}>
                  <ButtonText>
                    Log out
                  </ButtonText>
                </StyledButton>
                <SplitLine/>
            </StyledFormArea>
          </MainContainer>
        </ScrollView>
    </InnerContainer>
    );
  };

  export default Main;