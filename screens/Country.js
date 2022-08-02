import * as React from 'react';
import { Button, View, Text, TextInput,ToastAndroid } from 'react-native';
import styles from '../components/Styles';

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
            ToastAndroid.show("Please enter valid Country name !",ToastAndroid.SHORT);         
        }
       else { 
        var param = {};
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#e1e1e1" }}>
      <View style={{backgroundColor:"#d1d1d1",padding:40,width:"80%", alignItems: 'center',borderRadius:20}}>
          <Text style={styles.textHeading}>Weather App Demo</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter country"
            placeholderTextColor="#353535"
            onChangeText={(val) => { onChangeText(val); onFilled(val) }}
            value={text}
          >
          
          </TextInput>
          <Button
            title=" SUBMIT "
            onPress={() => { fetchDetails(text); }}
            disabled={fill}
          />
        </View>
    </View>
  );
}




export default EnterCountry;
