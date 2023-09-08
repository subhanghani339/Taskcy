import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Btn = ({bgColor, btnLabel, textColor, Press}) => {
  return (
    <View>
      <TouchableOpacity
      onPress={Press}
        style={{
          backgroundColor: bgColor,
          borderRadius: 15,
          alignItems: 'center',
          minWidth: '100%',
          paddingVertical: 15,
          marginVertical: 10,
          elevation: 8
        }}>
        <Text style={{color: textColor, fontSize: 24, fontWeight: 'bold'}}>
          {btnLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;
