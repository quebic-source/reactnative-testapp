import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/components/MainScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/splash.png')}
    />
  );
}

function AppStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MainScreen" 
        component={MainScreen} 
        options={{ 
          headerTitleStyle: { alignSelf: 'center' },
          title: 'DeepEye',
          headerLeft: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Icon 
              name='menu' 
              style={{ paddingRight: 10 }} 
              onPress={()=>alert('clicket settings')} 
            />),
          }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStackNavigator/>
    </NavigationContainer>
  );
}
