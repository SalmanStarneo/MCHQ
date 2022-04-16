import React,{useState, useEffect} from 'react';
import KeyboardWrapper from '../KeyboardWrapper';
import QRCode from 'react-native-qrcode-svg';
import Axios from 'axios';


import{StyledContainer, InnerContainer, PageLogo,
   PageTitle, StyledButton,ButtonText,SplitLine, StyledInputLabel,
    SubTitle, MainContainer,QRListContainer,QRListText} from '../style.js'


const ListQR= ({route,navigation}) =>{
    const [qrListItems, setQrListItems] = useState([]);
    const url = "https://shrouded-anchorage-39534.herokuapp.com/user/listQR";
          // const url = "http://192.168.0.220:5000/user/listQR";
          const {email,name} = route.params;
          const listTest=[];
          const qrListOutput=[];

   
          useEffect(() => {
            setTimeout(() => {
              Axios.get(url,{params:{email:email}}).then((response) => {                
                Object.values(response.data).map((value) => {                  
                  listTest.push(value);
                  Object.entries(listTest[0].qrList).map((test) =>{
                    qrListOutput.push(test);
                    setQrListItems(Object.values(listTest[0].qrList));
                  });
                })
              }).catch((error) => {
                  console.log("Error: "+error);
                });
          
            }, 5000);
          }, []);

      
  const handlePress = (id) => {
    const qr = qrListItems.find(({ _id }) => _id === id);

    console.log(qr);
    // navigation.navigate('ViewQR', qr);
  }
    return (
      <KeyboardWrapper>       
        <StyledContainer>
                <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../../assets/mchq.png')}/>
                <PageTitle>Mobile College Helper QR</PageTitle>
                <SubTitle>List of generated QR code: {name}</SubTitle>
                </InnerContainer>

                    <MainContainer>
                    {qrListItems.length > 0  ?(
                        <>
                              {Object.values(qrListItems).map((qr) => {
                                return (
                                <QRListContainer key={qr._id} onClick={() => handlePress(qr.qrContent)}>
                                    <StyledInputLabel>Title:</StyledInputLabel>
                                    <QRListText>{qr.qrTitle}</QRListText>
                                    <StyledInputLabel>Content:</StyledInputLabel>
                                    <QRListText>{qr.qrContent}</QRListText>
                                    <QRCode value={qr.qrContent} 
                                    size={200} backgroundColor='white' color='black' />
                                </QRListContainer>
                                );
                            })}
                        </>
                    ) : (
                        <QRListText>"Loading..."</QRListText>
                    )}
                        {/* {qrListItems.length < 0 ? <QRListText>True</QRListText>:<QRListText>false</QRListText>} */}
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


  export default ListQR;