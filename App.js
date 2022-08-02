import * as React from 'react';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnterCountry from './screens/Country';
import CountryDetails from './screens/CountryDetails';
import WeatherDetails from './screens/WeatherDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="country" component={EnterCountry} options={{
          title: 'Enter Country Name', headerStyle: {
            backgroundColor: '#e1e1e1'
          },
        }} />
        <Stack.Screen name="CountryDetails" component={CountryDetails} options={{
          title: 'Country Details', headerStyle: {
            backgroundColor: '#e1e1e1'
          },
        }} />
        <Stack.Screen name="WeatherDetails" component={WeatherDetails} options={{
          title: 'Weather Details', headerStyle: {
            backgroundColor: '#e1e1e1'
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
