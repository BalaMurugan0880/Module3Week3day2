import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground, Button,FlatList,TouchableOpacity, Image } from 'react-native';

export default function WeatherWeek({navigation}){
  const [weather, setWeather] = useState([]);
  const [searchText, setsearchText] = useState('');
  const image = { uri: "https://i.stack.imgur.com/LOwyR.png" };

  const callApi = () => {
    fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q='+searchText+'&appid=9fd7a449d055dba26a982a3220f32aa2') 
    .then((response) => response.json()) 
    .then((json) => { setWeather(json.list); console.log(json);}) 
    .catch((error) => { console.error(error); }); 
}

const Item = ({item}) => (
  <View style={styles.flatlist}>
            
      <Image
          style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              
          }}
          source={{
              uri:'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'
          }}
      />
  
      <TouchableOpacity onPress={()=>navigation.push('WeatherWeekDetail', 
      {date:Date(item.dt*1000),weather:item.weather[0].main,temperature:(item.temp.day - 273.15).toFixed(2),icon:item.weather[0].icon,location:searchText})}>
          <Text style={styles.flatlisttext}>Weather : {item.weather[0].main}</Text> 
          <Text style={styles.flatlisttext}>Date: {Date(item.dt*1000)}</Text>     
          <Text style={styles.flatlisttext}>Temperature : {(item.temp.day - 273.15).toFixed(2)}C</Text>  
          
      </TouchableOpacity>   
         </View>
)
    return (
      <View style={styles.outerContainer}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Weekly Weather</Text>
      <View style={styles.innerContainer}>
      <TextInput 
      placeholder="Enter Location"
      placeholderTextColor="white"
      style={styles.textinput}
      onChangeText={text => setsearchText(text)}
      value={searchText} 
      />
      <Button onPress={callApi}  title="Search"  />
      </View>
      
      <FlatList
      style={styles.item}
           data={weather}
           renderItem={({ item }) => <Item item={item}/>
           }/>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
      );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: "row"
  },
  innerContainer: {
    flex: 0.5,
    flexDirection: 'row',
    textAlign: "center",
    justifyContent: "center",
    alignContent: 'center',
    flexWrap:'wrap',
    
  },
  textinput:{
    fontWeight: 'bold', 
    height:  40, 
    color: 'white', 
    textAlign: 'center',
    backgroundColor: "#000000a0",
    borderWidth: 1,
    borderColor:'white',

  },
  text:{
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,

    
  },
  flatlist:{
    color: 'white', 
    backgroundColor: "#000000a0",
    borderWidth: 1,
    borderColor:'white',
    flex: 2,
    justifyContent: "center",
    flexWrap:'wrap',
    alignItems:'center',
    textAlign:'center',

    
    
  },
  flatlisttext:{
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    
  }

});
