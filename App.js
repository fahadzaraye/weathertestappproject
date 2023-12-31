
import React, { useEffect } from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Text,
} from 'react-native';
import MainStackNavigator from "./src/Navigations/MainStackNavigator";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <View style={styles.Container}>
        <MainStackNavigator />
      </View>
    </SafeAreaProvider>

  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

export default App;
