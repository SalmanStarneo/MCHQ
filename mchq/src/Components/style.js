import styled from 'styled-components/native';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary:'#82ade8',
    secondary:'#cfcfeb',
    tertiary:'#0000CC',
    darkViolet:'#9400D3',
    brand:'#F8F8FF',
    green:'#3CB371',
    red:'#FF6347',
};

const {primary, secondary, tertiary, darkViolet, brand, green, red}= Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 30px;
    padding-top: 40px;
    background-color: ${primary};

`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    ${(props) => props.main && `
        background-color: ${red};
    `}

`;
export const MainContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    margin-right: 180px;
    align-items: center;
    text-align:center;
    justify-content: center;
    marginHorizontal: 5px;  
`;


export const UserImage = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 25px;
    border-width: 1px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;
export const HeaderImage = styled.Image`
    height: 50%;
    min-width: 100%;
`;

export const PageLogo = styled.Image`
    height: 150px;
    width: 100px;
`;
export const PageTitle = styled.Text`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 5px;

    ${(props) => props.main && `
        font-size: 35px;
        color: ${green};  
    `}
`;
export const SubTitle = styled.Text`
    font-size: 17px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    letter-spacing: 1px;
    font-weight: bold;

    ${(props) => props.main && `
        margin-bottom:5px;
        font-weight: normal;    
    `}
`;


export const QRListContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    margin: 10px;
    padding: 5px;
    background-color: ${red};

`;

export const QRListText = styled.Text`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 5px;

    ${(props) => props.main && `
        font-size: 35px;
        color: ${green};  
    `}
`;
export const StyledFormArea = styled.View`
    width: 90%;
    margin-horizontal: 5px;
    margin-vertical: -15px;
`;
export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 5px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 5px;
    margin-bottom: 25px;
    color: ${tertiary};
`;

export const StyledInputBox = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 5px;
    border-radius: 5px;
    font-size: 16px;
    height: 150px;
    text-align: left;
    margin-vertical: 5px;
    margin-bottom: 25px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    font-size: 15px;
    color: ${tertiary};
    text-align: left;
    font-weight: bold;
`;
export const InputContainer = styled.View`
    justify-content: center;
    margin-left: 25px;
`;
export const BarCodeBox = styled.View`
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 250px;
    overflow:hidden;
    margin:40px;
    margin-horizontal:30px;
    border-radius: 10px;
    background-color:${red};
`;
export const BarCodeText = styled.Text`
    font-size: 18px;
    color: ${darkViolet};
    font-weight: bold;
    margin:5px;
`;

export const BarCodeTextBox = styled.View`
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 250px;
    overflow:hidden;
    margin-horizontal:40px;
    border-radius: 10px;
    background-color:${secondary};
`;
export const LeftSideIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index:  1;
`;
export const RightSideIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index:  1;
`;
export const StyledButton = styled.TouchableOpacity`
    background-color: ${brand};
    padding: 5px;
    align-items:center;
    justify-content: center;
    border-radius: 5px;
    height: 50px;
    margin-left:25px;
    margin-vertical: 20px;
    
    ${(props) => props.main && `
        margin-left:0px;  
        padding: 0px;
    `}
`;

export const ButtonText = styled.Text`
    color: ${green};
    font-size: 18px;
    font-weight: bold;
`;

export const AlertBox = styled.Text`
    font-size:15px;
    text-align:center;
    color: ${(props) => (props.type == 'PASS' ? green : red)};
`;
export const SplitLine = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkViolet};
    margin-vertical:  10px;
`;