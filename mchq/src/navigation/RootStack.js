import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Main from '../Components/MainScreen/Main'
import Login from '../Components/LoginScreen/Login'
import Register from "../Components/RegisterScreen/Register";
import { Colors } from "../Components/style";

const {primary, tertiary} = Colors;
const Stack = createNativeStackNavigator();

const RootStack = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{
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
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
      </NavigationContainer>
    );
};

export default RootStack;