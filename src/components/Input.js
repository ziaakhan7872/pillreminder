import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
  return (
    <View
      style={{
        borderColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        width: '60%',
        marginTop: 10,
        alignSelf: 'center',
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        placeholderStyle={props.placeholderStyle}
        placeholderTextColor={props.placeholderTextColor}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 15,
  },
});
