import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
export default function Loading() {
  return (
    <View style={styles.backgrounds}>
      <LottieView
        source={require('../assets/book-search.json')}
        autoPlay
        style={styles.animation}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  backgrounds: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.8,
    backgroundColor: 'black',
  },
});
