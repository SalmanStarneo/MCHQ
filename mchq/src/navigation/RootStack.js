import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Main from '../Components/MainScreen/Main'
import Login from '../Components/LoginScreen/Login'
import Register from "../Components/RegisterScreen/Register";
import GenerateQR from "../Components/GenerateQRScreen/GenerateQR";
import ViewQR from "../Components/ViewQRScreen/ViewQR";
import ListQR from "../Components/ListQRScreen/ListQR";
import ScanQR from "../Components/ScanQRScreen/ScanQR";
import { Colors } from "../Components/style";
import { CredentialsContext } from "../Components/CredentialsContext";
const {tertiary} = Colors;
const Stack = createNativeStackNavigator();

const RootStack = () => {

    return(
        <CredentialsContext.Consumer>
            {({storedCredentials}) => (
                        <NavigationContainer>
                        <Stack.Navigator initialRouteName='Login'
                         screenOptions={{
                            headerStyled:{
                                backgroundColor: 'transparent'
                            },
                            headerTintColor:tertiary,
                            headerTransparent: true,
                            headerTitle:'',
                            headerLeftContainerStyle:{
                                paddingLeft:20
                            }
                        }}>

                        {storedCredentials ? (<Stack.Screen name="Main" component={Main} />):(<>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                        </>)}
                        <Stack.Screen name="GenerateQR" component={GenerateQR} />
                        <Stack.Screen name="ViewQR" component={ViewQR} />
                        <Stack.Screen name="ListQR" component={ListQR} />
                        <Stack.Screen name="ScanQR" component={ScanQR} />

                        </Stack.Navigator>
                  </NavigationContainer>
            )}
        </CredentialsContext.Consumer>
    );
};

export default RootStack;