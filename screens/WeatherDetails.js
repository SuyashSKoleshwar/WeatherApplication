import * as React from 'react';
import {View, Text, Image,} from 'react-native';
import styles from '../components/Styles';

function WeatherDetails({ navigation, route }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "space-around" ,backgroundColor:"#e1e1e1",flexDirection:"column" }}>
        <View style={{flex:0.4,justifyContent:"center"}}>
            <Text style={styles.textHeading}>Weather Details for - {route.params.cap}</Text>
        </View>
        <View style={{flex:0.6,flexDirection:'column',width:"90%"}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:"flex-start"}}>
                <View style={{borderRadius:15,flex:1,backgroundColor:"#d1d1d1",margin:15,padding:10,justifyContent:"space-around",alignItems:"center"}}>
                    <Text style={[styles.text]}>Temperature</Text>
                    <Text style={[styles.text,{fontSize:35,fontWeight:"700"}]}>{route.params.temp}</Text>
                </View>
                <View style={{borderRadius:15,flex:1,backgroundColor:"#d1d1d1",margin:15,padding:10,justifyContent:"space-around",alignItems:"center"}}>
                    <Text style={styles.text}>Wind Speed</Text>
                    <Text style={[styles.text,{fontSize:35,fontWeight:"700"}]}>{route.params.wSpeed}</Text>
                </View>              
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:"flex-start"}}>
                <View style={{borderRadius:15,flex:1,backgroundColor:"#d1d1d1",margin:15,padding:10,justifyContent:"space-around",alignItems:"center"}}>
                    <Text style={[styles.text]}>Precipitation</Text>
                    <Text style={[styles.text,{fontSize:35,fontWeight:"700"}]}>{route.params.preci}</Text>
                </View>
                <View style={{borderRadius:15,flex:1,backgroundColor:"#d1d1d1",margin:15,padding:10,justifyContent:"space-around",alignItems:"center"}}>
                    <Text style={styles.text}>Weather Icon</Text>
                    <Image style={{ width: 60, height: 60 }} source={{ uri: route.params.icon }}/>
                </View>              
            </View>
        </View>
        <View style={{height:100}}></View>
    </View>
    );
  }
  
export default WeatherDetails;  