import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StyleSheet } from "react-native";
export const DetailScreen = ({ route, navigation }) => {
const { itemId } = route.params;
const movies = [
{"id":0, "value":'Whiskas',"value1":'100 pcs', "img":require('./images/whiskas.jpg')},
{"id":1, "value":'Royan Canin Junior',"value1":'150 pcs', "img":require('./images/royal.jpg')},
{"id":2, "value":'Kandang Kucing 90x58x60',"value1":'5 pcs', "img":require('./images/kandang.jpg')},
{"id":3, "value":'Pet Cargo',"value1":'1 pcs', "img":require('./images/petcargo.jpg')},
];
const selectedMovie = movies[itemId];
return (
<View style={{ flex: 1 }}>
<Text style={styles.titleText}>Product Detail</Text>
<Text style={styles.baseText}>Inventory ID: {selectedMovie.id}</Text>
<Text style={styles.baseText}>Product Name: {selectedMovie.value}</Text>
<Text style={styles.baseText}>Sisa Stok: {selectedMovie.value1}</Text>
<Image source={selectedMovie.img} style={{width: 400, height: 490,
resizeMode:'contain'}} />
</View>
);
}
const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin",
      fontSize: 20
    },
    titleText: {
      fontSize: 30,
      fontWeight: "bold"
    }
  });