import * as React from 'react';
import { Button, View, Text, TextInput, Image,ToastAndroid } from 'react-native';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const EnterCountry = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [fill, onFill] = React.useState(true);

  function onFilled(val) {
    ; if (val == "") { onFill(true) }
    else onFill(false)
  }

  function fetchDetails(value) {
    fetch('https://restcountries.com/v3.1/name/' + value + '?fullText=true')
      .then((response) => response.json())
      .then((json) => {
        if(json.message==="Not Found"){          
            ToastAndroid.show("Please enter correct Country name !",ToastAndroid.SHORT);         
        }
        // console.log("CAPITAL :: ", json[0].capital[0]);//CAPITAL
        // console.log("LAT :: ", json[0].latlng[0]);//LAT
        // console.log("LNG :: ", json[0].latlng[1]);//LNG
        // console.log("POPULATION :: ", json[0].population);//POPULATION
        // console.log("FLAG :: ", json[0].flags.png);//FLAG
       else { var param = {};
        param.capital = json[0].capital[0];
        param.lat = json[0].latlng[0];
        param.lng = json[0].latlng[1];
        param.popu = json[0].population;
        param.flag = json[0].flags.png;
        navigation.navigate('CountryDetails', param);}
      })
      .catch((error) => { console.error(error); });
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 30, color: "#000", marginBottom: 40 }}>Weather App Demo</Text>
      <TextInput
        style={{
          color: "#000",
          padding: 5,
          margin: 5,
          borderColor: "#070707",
          borderWidth: 1,
          width: 200,
          fontSize: 15,
          marginBottom: 15
        }}
        placeholder="Enter country"
        placeholderTextColor="#353535"
        onChangeText={(val) => { onChangeText(val); onFilled(val) }}
        value={text}
      >

      </TextInput>
      <Button
        title="SUBMIT"
        onPress={() => { fetchDetails(text); }}
        disabled={fill}
      />
    </View>
  );
}

function CountryDetails({ navigation, route }) {
  function fetchWeather(value) {
    console.log(value)
    fetch('http://api.weatherstack.com/current?access_key=38354a657d7a3a01cfcdee8c9cac5db8&query=' + value)
      .then((response) => response.json())
      .then((json) => {
        // console.log("FOR :: ", value);
        // console.log("TEMP :: ", json.current.temperature);
        // console.log("wSpeed :: ", json.current.wind_speed);
        // console.log("Preci :: ", json.current.precip);
        // console.log("icon :: ", json.current.weather_icons[0]);
        var param = {};
        param.temp = json.current.temperature;
        param.wSpeed = json.current.wind_speed;
        param.icon = json.current.weather_icons[0];
        param.preci = json.current.precip;
        param.cap = value;
        navigation.navigate('WeatherDetails', param);
      })
      .catch((error) => { console.error(error); });
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={{ width: 200, height: 150 }}
        source={{ uri: route.params.flag }}
      />
      <Text style={{ fontSize: 18, color: "#000", marginBottom: 10 }}>Capital - {route.params.capital}</Text>
      <Text style={{ fontSize: 18, color: "#000", marginBottom: 10 }}>Latitude - {route.params.lat}</Text>
      <Text style={{ fontSize: 18, color: "#000", marginBottom: 10 }}>Longitude - {route.params.lng}</Text>
      <Text style={{ fontSize: 18, color: "#000", marginBottom: 10 }}>Population - {route.params.popu}</Text>
      <Button
        title="Capital Weather"
        onPress={() => { fetchWeather(route.params.capital); }}
      />
    </View>
  );
}


function WeatherDetails({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 25, color: "#000", marginBottom: 30 }}>Weather Details for - {route.params.cap}</Text>
      <Text style={{ fontSize: 18, color: "#000", marginBottom: 10 }}>Temperature - {route.params.temp}</Text>
      <Text style={{ fontSize: 18, color: "#000", marginBottom: 10 }}>Wind Speed - {route.params.wSpeed}</Text>
      <Text style={{ fontSize: 18, color: "#000", marginBottom: 10 }}>Precipitation - {route.params.preci}</Text>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: route.params.icon }}
      />
    </View>
  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
