import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen/MainScreen';
import DetailsScreen from './src/screens/DetailsScreen/DetailsScreen';
import {getOSName} from './src/helpers';
import * as Bomanti from 'bomanti';

LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function App(): React.JSX.Element {
  const OSName = getOSName();
  return (
    <GestureHandlerRootView style={styles.ghRootView}>
      <Bomanti.ThemeProvider
        value={{
          breakpoints: {mobile: 550},
        }}>
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              animation: OSName === 'visionos' ? 'default' : 'fade',
            }}>
            <Stack.Screen
              name="Home"
              component={MainScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Bomanti.ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ghRootView: {
    flex: 1,
  },
});

export default App;
