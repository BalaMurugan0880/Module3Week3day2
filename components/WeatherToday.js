import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native';


export default function WeatherToday(){
    const image = { uri: "https://i.stack.imgur.com/LOwyR.png" };
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Kuala%20Lumpur&appid=9fd7a449d055dba26a982a3220f32aa2') 
        .then((response) => response.json()) 
        .then((json) => { setWeather(json); }) 
        .catch((error) => { console.error(error); }); 
    },[])

    return (
        <View style={styles.outerContainer}>

        {
            weather ? 
            <ImageBackground source={image} style={styles.image}>
             <Text style={styles.text}>Current Weather</Text>
             <View style={styles.innerContainer}>
             <Image
            style={{
                width: 100,
                height: 100,
                
                
            }}
            source={{
                uri:'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'
            }}
        />
            <Text style={styles.text}>Date: {Date(weather.dt*1000)}</Text>
            <Text style={styles.text}>Weather : {weather.weather[0].main}</Text>
            <Text style={styles.text}>Temperature : {(weather.main.temp - 273.15).toFixed(2)}C</Text>
            <Text style={styles.text}>Pressure : {weather.main.pressure}</Text>
            <Text style={styles.text}>Humidity : {weather.main.humidity}</Text>
            <Text style={styles.text}>{Date(weather.sys.sunrise*1000)}</Text>
            <Text style={styles.text}>{Date(weather.sys.sunset*1000)}</Text>




            </View>
            </ImageBackground>
            :
            <View><Text>Loading..</Text></View>
        }
       

        <StatusBar style="auto" />
        
      </View>
      );
}

const styles = StyleSheet.create({
     outerContainer: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignContent: 'center',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    textAlign: "center",
    justifyContent: "center",
    alignContent: 'center',
    alignItems:'center',
    
  },
  
  text:{
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  });