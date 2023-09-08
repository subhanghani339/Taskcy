import { View, Image, Text } from 'react-native'
import React from 'react'
import Btn from './Btn'

const Slide1 = (props) => {
  return (
    <View style={{backgroundColor: '#fff', minHeight: '100%'}}>
      <Image source={require("./assests/cover.png")} style={{width: '100%', height: 400,marginRight: 30}} />
      <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40, position: 'absolute', top: '50%', backgroundColor: '#fff'}}>
      <View style={{paddingTop: 40,}}>
        <Text style={{color: '#756ef3', fontSize: 45, textAlign: 'center', fontWeight: 'bold'}}>Taskcy</Text>
        <Text style={{color: '#002055', fontSize: 35, textAlign: 'center', fontWeight: 'bold'}}>Building Better</Text>
        <Text style={{color: '#002055', fontSize: 35, textAlign: 'center', fontWeight: 'bold'}}>Workplaces</Text>
        <Text style={{maxWidth: '70%', marginTop: 10, marginLeft:'auto', marginRight:'auto', textAlign: 'center', lineHeight: 20}}>Create a unique emotional story that describes better than words</Text>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 20}}>
      <Btn textColor="white" bgColor="#756ef3" btnLabel="Get Started" Press={() => props.navigation.navigate('Login')} />
      </View>
      </View>
    </View>
  )
}

export default Slide1