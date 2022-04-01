import styled from 'styled-components';
import {View} from 'react-native';
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
    padding-top:;
    background-color:${primary};
`