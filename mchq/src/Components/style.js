import styled from 'styled-components/native';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

export const Colors = {
    primary:'#FFFAFA',
    secondary:'#E5E7EB',
    tertiary:'#1E90FF',
    darkViolet:'#9400D3',
    brand:'#4682B4',
    green:'#3CB371',
    red:'#FF6347',
}

const {primary, secondary, tertiary, darkViolet, brand, green, red}= Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: 10px;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`

export const PageLogo = styled.Image`
    height: 200px;
    width: 250px;
`
export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
`
export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
`
export const StyledFormArea = styled.View`
    width: 90%;
`
export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 5px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`

export const StyledInputLabel = styled.Text`
    font-size: 13px;
    color: ${tertiary};
    text-align: left;
`
export const LeftSideIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index:  1;
`
export const RightSideIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index:  1;
`
export const StyledButton = styled.TouchableOpacity`
    background-color: ${brand};
    padding: 15px;
    justify-content: center;
    border-radius: 5px;
    height: 60px;
    margin-vertical: 5px;
`
export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
`