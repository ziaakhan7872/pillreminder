import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

function Container(props) {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      <StatusBar hidden={true} />
      {props.children}
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
  },
};

export default Container;
