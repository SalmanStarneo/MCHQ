import React,{useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStack from './src/navigation/RootStack';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './src/Components/CredentialsContext';
const Stack = createNativeStackNavigator();


export default function App() {
  const[appReady, setAppReady]=useState();
  const [storedCredentials, setStoredCredentials]=useState("");

  const checkLoginCredentials = () => {
    AsyncStorage.getItem('mchqCredentials').then((result) =>{
      if(result !== null){
        setStoredCredentials(JSON.parse(result));
      }else{
        setStoredCredentials(null);
      }
    }).catch(error => console.log(error))
  }

  
  if(!appReady){
    return(
    <AppLoading 
      startAsync={checkLoginCredentials}
      onFinish={() => setAppReady(true)}
      onError={console.warn}
    />)
  }

  return (
    <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}><RootStack/></CredentialsContext.Provider>
  );
}