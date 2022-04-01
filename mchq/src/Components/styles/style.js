import styled from 'styled-components';
import {View, Text, Image} from 'react-native';
import {Constants} from 'expo-constants';

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
    padding-top: ${StatusBarHeight +10}px;
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
