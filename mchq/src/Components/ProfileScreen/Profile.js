import React,{useContext} from 'react';
// import { View } from 'react-native';
// import {Ionicons, Octicons} from '@expo/vector-icons';
// import { MainContainer } from 'formik';
import{MainContainer, InnerContainer, 
      PageLogo, PageTitle, StyledFormArea,
      Colors, InputContainer, StyledButton, UserImage,
      ButtonText, SplitLine, SubTitle, HeaderImage} from '../style.js'
// import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../CredentialsContext';

const {brand, darkViolet} = Colors;

const Profile= () =>{
    
    // const [hidePassword, setHidePassword] = useState(true);
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
        <MainContainer>
        <PageTitle>Mobile College Helper QR</PageTitle>
          <SplitLine/>
          <SubTitle>{name ||"Profile-Screen"}</SubTitle>
          <SubTitle>{email ||"View your attendance"}</SubTitle>
          <StyledFormArea>
            <UserImage resizeMode="cover" source={require('../../assets/th.jpg')}/>
            <SplitLine/>
              <StyledButton onPress={clearLogin}>
                <ButtonText>
                  Log out
                </ButtonText>
              </StyledButton>
          </StyledFormArea>
        </MainContainer>
    </InnerContainer>
    );
  };

  export default Profile;