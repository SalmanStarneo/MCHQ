import React from 'react';
import { Button, StyleSheet, Text, TextInput } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

import{
  StyledContainer, InnerContainer, PageLogo, PageTitle
} from './../styles/style';

const Login= ({navigation}) =>{
    return (
      <StyledContainer>
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('../../assets/mchq.png')}/>
          <PageTitle>Mobile College Helper QR</PageTitle>
        </InnerContainer>
        <Text style={styles.texts}>MCHQ Login app screen</Text>
        <TextInput
        placeholder="Username"
        style={styles.inputs}/>
        <TextInput
        placeholder="password"
        style={styles.inputs}/>
        <Text style={styles.texts}>-----------</Text>
        <Button title='log in' onPress={() => navigation.navigate("Main")}/>
      </StyledContainer>
    );
  }

  export default Login;