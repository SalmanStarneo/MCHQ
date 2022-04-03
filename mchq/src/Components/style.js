import styled from 'styled-components/native';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

export const Colors = {
    primary:'#4682B4',
    secondary:'#cfcfeb',
    tertiary:'#1E90FF',
    darkViolet:'#9400D3',
    brand:'#F8F8FF',
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
    margin-vertical:1px;
`
export const ExtraView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
`
export const ExtraText = styled.Text`
    font-size: 10px;
    justify-content: center;
    align-items: center;
    color: ${tertiary};
`

export const PageLogo = styled.Image`
    height: 150px;
    width: 100px;
`
export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 5px;
`
export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 10px;
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
    margin-vertical: 5px;
    margin-bottom: 25px;
    color: ${tertiary};
`

export const StyledInputLabel = styled.Text`
    font-size: 13px;
    color: ${tertiary};
    text-align: left;
`
export const InputContainer = styled.View`
    justify-content: center;
    margin-left: 25px;
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
    align-items:center;
    justify-content: center;
    border-radius: 5px;
    height: 60px;
    margin-left:25px;
    margin-vertical: 5px;
`

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
`

export const AlertBox = styled.Text`
    font-size:10px;
    text-align:center
`
export const SplitLine = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkViolet};
    margin-vertical:  10px;
`