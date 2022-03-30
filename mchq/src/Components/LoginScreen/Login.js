import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

// const NavigationScreen = props =>{
//     props.navigation.navigate('main');
// }

const Login= ({navigation}) =>{
    return (
      <View style={styles.container}>
        <Text style={styles.texts}>MCHQ Login app screen</Text>
        <TextInput
        placeholder="Username"
        style={styles.inputs}/>
        <TextInput
        placeholder="password"
        style={styles.inputs}/>
        <Text style={styles.texts}>-----------</Text>
        <Button title='log in' onPress={() => navigation.navigate("Main")}/>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6A5ACD',
      alignItems: 'center',
      justifyContent: 'center',
    },   
     texts:{
      color:"white",
      fontSize: 30,
      textAlign:"center",
      fontWeight:'bold',
      margin:10
    },
    inputs:{
      height: 40,
      width: 100,
      margin:10,
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'white' 
    },
  });

  export default Login;