import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// const NavigationToScreen = props =>{
//     props.navigation.navigate('login');
// }

const Main= ({navigation}) =>{
    return (
      <View style={styles.container}>
        <Text style={styles.texts}>MCHQ first screen</Text>
        <Button title='Back to Login' onPress={() => navigation.navigate("Login")}/>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00CED1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texts:{
      fontSize: 20,
      fontWeight:'bold',
      margin:10
    },
  });

  export default Main;