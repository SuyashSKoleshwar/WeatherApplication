import * as React from 'react';
import { Button, View, Text, Image,ImageBackground} from 'react-native';
import styles from '../components/Styles';

function CountryDetails({ navigation, route }) {


    function fetchWeather(value) {
        fetch('http://api.weatherstack.com/current?access_key=38354a657d7a3a01cfcdee8c9cac5db8&query=' + value)
          .then((response) => response.json())
          .then((json) => {
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "space-around",flexDirection:"column",backgroundColor:"#e1e1e1" }}>
        <View style={{flex:0.2}}>
            <Image
                style={{ width: 270, height: 180 }}
                source={{ uri: route.params.flag }}/>
        </View>
        <View style={{flex:0.4,flexDirection:'column',width:"90%"}}>

            <View style={{flex:1,flexDirection:'row',justifyContent:"flex-start"}}>

                <View style={{borderRadius:15,flex:1,backgroundColor:"#d1d1d1",margin:15,padding:10,justifyContent:"space-around",alignItems:"center"}}>
                    <Text style={[styles.text]}>Capital</Text>
                    <Text style={[styles.text,{fontSize:25,fontWeight:"700"}]}>{route.params.capital}</Text>
                </View>
                <View style={{borderRadius:15,flex:1,backgroundColor:"#d1d1d1",margin:15,padding:10,justifyContent:"space-around",alignItems:"center"}}>
                    <Text style={styles.text}>Latitude</Text>
                    <Text style={[styles.text,{fontSize:25,fontWeight:"700"}]}>{route.params.lat}</Text>
                </View>              
            </View>

            <View style={{flex:1,flexDirection:'row',justifyContent:"center"}}>
                <View style={{borderRadius:15,flex:1,backgroundColor:"#d1d1d1",margin:15,padding:10,justifyContent:"space-around",alignItems:"center"}}>
                    <Text style={styles.text}>Longitude</Text>
                    <Text style={[styles.text,{fontSize:25,fontWeight:"700"}]}>{route.params.lng}</Text>
                </View>
                
                <View style={{borderRadius:15,flex:1,backgroundColor:"#d1d1d1",margin:15,padding:10,justifyContent:"space-around",alignItems:"center"}}>
                    <Text style={styles.text}>Population</Text>
                    <Text style={[styles.text,{fontSize:25,fontWeight:"700"}]}>{route.params.popu}</Text>
                </View>
                
            </View>
            
        </View>
        
            <Button
                title="Capital Weather"
                onPress={() => { fetchWeather(route.params.capital); }}/>
       
      </View>
    );
  }
  
export default CountryDetails;  