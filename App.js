/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, Image,StyleSheet,Button,SafeAreaView,Alert,TextInput, ScrollView,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './AppStyle'
import {AppHomex} from './ScreenUtama'


const HelloWorldApp = ({navigation}) => {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const saveData = async () => {
        try {
        const response = await fetch('http://10.0.2.2:3000/posts/', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:'david',
            post: text
            })
            });
            const json = await response.json();
            //setData(json.data);
            } catch (error) {
            console.error(error);
            } finally {
            navigation.navigate('AboutScreen');
            }
            }
     
    
 return (
     <ScrollView>
 <View style={styles.container}>
 <Text style={{marginTop:60,textAlign:'center',color:'#2196F3'}}>WElCOME TO PET SHOP {'\n'} 
 </Text>

 <Image source={require('./images/dudu.png')}  style={{width: 300,height: 300, resizeMode:'center'}} 
 />
 
 <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={text}
        placeholder="input data....."
      />
<View style={styles.button}>
    <View>
    <Button
    title="cek" 
    onPress={() => Alert.alert('Yang dicari tersedia dan tersimpan')}
    onPress={() => saveData()}
    />

    </View>
    <View style={{marginTop:12}}>
    <Button
    title="Pesanan" 
    onPress={() => navigation.navigate('Pesanan')}
    
    />
    </View>
</View>
 </View>
 </ScrollView>
 )
}
export default HelloWorldApp;
const Stack = createNativeStackNavigator();
const AppHome = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={HelloWorldApp} 
options={{ title: 'Harapan Indah Shop',
headerStyle: {backgroundColor: '#fa8072'},
headerTintColor: '#fff',
headerTitleStyle: {fontWeight: 'bold'} }}
/>

<Stack.Screen name="ScreenUtama" component={AppHomex}
options={{ title: 'Home',
headerStyle: {backgroundColor: '#2196F3'},
headerTintColor: '#fff',
headerTitleStyle: {fontWeight: 'bold'} }}
/> 



</Stack.Navigator>
</NavigationContainer>
);
}



