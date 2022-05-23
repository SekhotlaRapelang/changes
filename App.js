import { useState } from 'react';
import { StatusBar, TouchableOpacity,Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SimpleLineIcons, Ionicons,Octicons } from '@expo/vector-icons';

import Display from './Display';
export default function App() {
  const [image, setImage] = useState(require("./assets/normal.jpg"));
  function NormalPicture(){
    setImage(require("./assets/normal.jpg"))
  }
  function HappyPicture(){
    setImage(require("./assets/Happy.jpg"))
  }
  function SadPicture(){
    setImage(require("./assets/Sad.jpg"))
  }
  return (
    <View style={styles.container}>
      <View style={styles.HomeBars}>
        <TouchableOpacity>
      <Ionicons name="arrow-back" size={34} color="white" style={{marginStart:5, marginTopt:10}} />
      </TouchableOpacity>
      
      <Text style={{marginTop:30,marginStart:100, alignSelf:"center", fontWeight:'bold', fontSize:20, color: "white"}}>Pictures</Text>
      <TouchableOpacity>
      <SimpleLineIcons name="options-vertical" size={30} color="white" style={{marginStart:110,marginTop:5}}/>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <View style={styles.PictureView}>
        <Display image={image}/>
      </View>
      <View style={styles.MainBar}>
        
      <View style={{flexDirection: "row", justifyContent: "space-between", marginTop:5, alignItems: "center"}}>
       
      </View>
      
      <Text style={{marginBottom:5, alignSelf:"center", fontWeight:'bold', fontSize:20, color: "white"}}>Choose your Mood</Text>
        < View style={styles.pictures}>
          <TouchableOpacity onPress={NormalPicture}>

            <Image style={styles.Photo}
            source={require("./assets/normal.jpg")}/>
            <Text style={styles.Desc}>NORMAL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={HappyPicture}>
            <Image style={styles.Photo}
            source={require("./assets/Happy.jpg")}/>
            <Text style={styles.Desc}>HAPPY</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={SadPicture}>
            <Image style={styles.Photo}
            source={require("./assets/Sad.jpg")}/>
            <Text style={styles.Desc}>SAD</Text>
          </TouchableOpacity>
     </View> 
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainBar:{
    width:"100%",
    backgroundColor:"gray",
  },
  HomeBars:{
    width:"99%",
    flexDirection:'row',
    backgroundColor: "gray",
  },
  Photo:{
    alignSelf: 'center',
    height: 60,
    width:60,
    borderRadius:30,
  },
   PictureView:{
    flex:1,
     margin:5,
     backgroundColor: "blue",
     width: "95%",
     alignItems: "center",
    borderRadius:5,
   },
   pictures:{
     marginVertical:10,
     flexDirection:"row",
     width:"100%",
     height:59,
     alignItems:"center",
     justifyContent: 'space-evenly',
   },
   Desc:{
     alignSelf: "center",
     color:"white",
     fontWeight:"700",
   },  
});

