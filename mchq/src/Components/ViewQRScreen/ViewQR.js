import React,{useState} from 'react';
import KeyboardWrapper from '../KeyboardWrapper';
import QRCode from 'react-native-qrcode-svg';

import{StyledContainer, InnerContainer, PageLogo,
   PageTitle, StyledButton,ButtonText,SplitLine, SubTitle, MainContainer} from '../style.js'


const ViewQR= ({route,navigation}) =>{
    const {qrContent,qrTitle}=route.params;

    return (
      <KeyboardWrapper>       
        <StyledContainer>
                <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../../assets/mchq.png')}/>
                <PageTitle>Mobile College Helper QR</PageTitle>
                <SubTitle>ViewQR: {qrTitle}.</SubTitle>
                </InnerContainer>
                <MainContainer>
                    <SplitLine/>
                        <QRCode value={qrContent} 
                        size={250} backgroundColor='white' color='black' />
                </MainContainer>
                <SplitLine/>
                <StyledButton onPress={()=> navigation.goBack()}>
                <ButtonText>
                  Back to Main screen
                </ButtonText>
              </StyledButton>
              <SplitLine/>
        </StyledContainer>
      </KeyboardWrapper> 
    );
  };


  export default ViewQR;