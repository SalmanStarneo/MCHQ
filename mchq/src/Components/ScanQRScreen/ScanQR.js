import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import KeyboardWrapper from '../KeyboardWrapper';
import{StyledContainer, InnerContainer, PageLogo,
    PageTitle, BarCodeTextBox, StyledButton,
    BarCodeBox,BarCodeText, ButtonText, SplitLine,SubTitle} from '../style.js'

const ScanQR = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  useEffect(() => { setTimeout(() => {
        askForCameraPermission();
  }, 4000);
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  if (hasPermission === null) {
    return (
      <StyledContainer>
        <BarCodeText>Requesting for camera permission</BarCodeText>
      </StyledContainer>)
  }
  if (hasPermission === false) {
    return (
      <StyledContainer>
        <BarCodeText>No access to camera</BarCodeText>
        <StyledButton onPress={() => askForCameraPermission()}>
            <ButtonText>Allow Camera</ButtonText>
         </StyledButton>
      </StyledContainer>)
  }

  return (
    <KeyboardWrapper>
    <StyledContainer>
        <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../../assets/mchq.png')}/>
                <PageTitle>Mobile College Helper QR</PageTitle>
                <SubTitle>ScanQR</SubTitle>
                </InnerContainer>
            <SplitLine/>
      <BarCodeBox>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </BarCodeBox>
       <SplitLine/>
      <BarCodeTextBox>
      <BarCodeText>{text}</BarCodeText>
      </BarCodeTextBox>     
      {scanned &&<StyledButton onPress={() => setScanned(false)}>
                <ButtonText>
                     Scan again
                </ButtonText>
              </StyledButton>}
        <SplitLine/>
        <StyledButton onPress={() => navigation.goBack()}>
        <ButtonText>
            Back to main screen
        </ButtonText>
        </StyledButton>
    </StyledContainer>
    </KeyboardWrapper>

  );
}

export default ScanQR; 