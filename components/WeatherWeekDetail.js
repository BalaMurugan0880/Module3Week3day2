import React from 'react';
import { Text, View,StyleSheet,ImageBackground, Image } from 'react-native';

export default function WeatherWeekDetail({navigation}){
  const image = { uri: "https://i.stack.imgur.com/LOwyR.png" };
    return (
      <View style={styles.outerContainer}>
      <ImageBackground source={image} style={styles.image}>
     <View style={styles.innerContainer}>
     <Image
     style={{
         width: 100,
         height: 100,
         resizeMode: 'contain',
         
     }}
     source={{
         uri:'http://openweathermap.org/img/w/' + navigation.getParam('icon') + '.png'
     }}
 /> 
         <Text style={styles.flatlisttext}>Location : {navigation.getParam('location')}</Text>      
         <Text style={styles.flatlisttext}>Weather : {navigation.getParam('weather')}</Text>      
         <Text style={styles.flatlisttext}>Date : {navigation.getParam('date')}</Text>  
         <Text style={styles.flatlisttext}>Temperature : {navigation.getParam('temperature')}C</Text> 
         
     
     </View>
     </ImageBackground>
 </View>
      );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: "column"
    
  },
  innerContainer: {
    flex: 0.5,
    flexDirection: 'column',
    backgroundColor: "#000000a0",
    borderWidth: 1,
     borderColor:'white',
     textAlign: "center",
    justifyContent: "center",
    alignContent: 'center',
    flexWrap:'wrap',
    alignItems:'center'
   
    
  },
  image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },

    flatlisttext:{
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      
    }

});
