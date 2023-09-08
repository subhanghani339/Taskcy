import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Btn from './Btn'
import Field from './Field';

const Login = (props) => {
  return (
    <ScrollView>
    <View style={{backgroundColor: "#fff"}}>
      <Text style={{textAlign: 'center', marginTop: 20, fontSize: 20, fontWeight: 'bold', color:'#002055'}}>Sign In</Text>
      <View style={{minWidth: '100%', backgroundColor: "#fff", marginLeft: 20}}>
        <Text style={{color: '#002055', fontSize: 35, marginTop: 60,fontWeight: 'bold',}}>Welcome Back</Text>
        <Text style={{color: '#868d95', fontSize: 16,  marginVertical: 10, maxWidth: '80%', lineHeight: 25}}>Please enter your email address and password for login</Text>
      </View>
      <View style={{backgroundColor: 'white', minWidth: '100%', paddingTop: 10, alignItems: 'center', paddingHorizontal: 25}}>
        <Field placeholder="Enter your Email Address" keyboardType={"email-address"} />
        <Field placeholder="Enter your Password" secureTextEntry={true} />
        <View style={{ alignItems:'flex-end', minWidth:'100%', paddingRight: 16, marginBottom: 20}}>
          <Text style={{color: '#445c84', fontWeight: 'bold', fontSize: 16 }}>Forgot Password?</Text>
        </View>
        <Btn textColor="white" bgColor="#756ef3" btnLabel="Sign In" Press={() => props.navigation.navigate('Home')} />
        <View style={{display: 'flex', flexDirection:'row', justifyContent:'center', marginTop: 30}} >
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Signin with </Text>
        </View>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 50}} >
            <View>
            <Image source={require("./assests/apple.png")} style={{width: 40, height: 40,marginRight: 30}} />
            </View>
            <View>
            <Image source={require("./assests/google.png")} style={{width: 40, height: 40, marginLeft: 30}}  />
            </View>
          </View>
      </View>
      <View style={{textAlign: 'center', paddingTop: 30, marginBottom: 30}}>
        <Text style={{textAlign: 'center',}}>Not Register Yet?
        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
          <Text style={{marginLeft:10, color: '#756ef3', fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableOpacity>
        </Text>
      </View>
    </View>
    </ScrollView>
  );
};

export default Login;