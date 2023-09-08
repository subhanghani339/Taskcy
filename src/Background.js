import { View, ImageBackground } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <View style={{flex:1}}>
      <ImageBackground source={require("./assests/leaves.jpg")} style={{height: '100%', flex: 1, resizeMode: 'cover'}} />
      <View style={{position: 'absolute'}}>
        {children}
      </View>
    </View>
  )
}

export default Background