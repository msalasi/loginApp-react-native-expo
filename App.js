import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import ButtonGradient from './ButtonGradient';
import SvgComponent from './SvgComponent';


const { width, height } = Dimensions.get('window')

export default function App() {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgComponent/>
      </View>
      
      <View style={styles.container}>
        <Text style={styles.titulo}>Hello</Text>
        <Text style={styles.subTitle}>Sign In to your account</Text>
        <TextInput 
          placeholder="jhon@email.com"
          style={styles.textInput}
        />
        <TextInput 
          placeholder="password"
          style={styles.textInput}
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <ButtonGradient/>
        <Text style={styles.forgotPassword}>Don't have an account?</Text>
        <StatusBar style="auto" />
      </View>
    </View>
      
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "20%"
  },
  containerSVG: {
    width: 66,
    height: 58,
    resizeMode: 'stretch'
  },
  titulo: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  },
  button: {

  },
  
});