import {View, TextInput} from 'react-native';
import React from 'react';
import { darkGreen } from '../Constants';

const Field = (props) => {
  return ( 
  <TextInput
    {...props}
    style={{borderRadius: 100, color: "#002055", paddingHorizontal: 10, width: '100%',backgroundColor:'#fff', marginVertical: 10, borderWidth: 1, borderColor: '#0047ab', borderRadius: 17, height: 60}}
    placeholderTextColor={darkGreen}
    >
  </TextInput>
  )
};

export default Field;
