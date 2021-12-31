import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
export const ListScreen = ({ navigation }) => { const movies = [
    {"id":0, "value":'Whiskas'},
    {"id":1, "value":'Royal Canin'},
    {"id":2, "value":'Kandang Kucing'},
    {"id":3, "value":'Pet Cargo'},
    ];
    return (
    <View style={{ flex: 1}}>
    <Text style={styles.titleText}>Catalog</Text>
    { movies.map((item) => (
    <TouchableOpacity key={item.id} onPress={() =>
    navigation.navigate('DetailScreen', {itemId:item.id})}>
    <View key={item.id} style={styles.button}>
    <Text style={styles.buttonText}
    key={item.id}>{item.value}</Text>
    </View>
    </TouchableOpacity>
    ))}
    </View>
    );
    }
    const styles = StyleSheet.create({
    container: {
    paddingTop: 60,
    alignItems: 'center'
    },
    button: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#EF0909'
    },
    titleText: {
        textAlign: 'center',
        padding: 20,
        fontSize: 30,
        fontWeight: "bold"
      },
    buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontSize: 20
    }
    });