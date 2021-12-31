import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './Screen1'
import {AboutScreen} from './Screen2'
import {ListScreen} from './Screen3'
import {DetailScreen} from './Screen4'
import { TextInput, View, Image } from 'react-native';
const Stack = createNativeStackNavigator();
const AppHome = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="MovieList"
screenOptions={{headerShown: true,
headerStyle: {backgroundColor: '#FF6FB2'},
headerTintColor: '#fff',
headerTitleStyle: {fontWeight: 'bold'},
headerTitle: (props) => <AppHeader {...props} />}}>
<Stack.Screen name="Home"
component={HomeScreen}
options={{ title: 'My Home' }}/>
<Stack.Screen name="About"
component={AboutScreen}
options={{ title: 'Our Profile' }}/>
<Stack.Screen name="MovieList"
component={ListScreen}
options={{ title: 'Movie List',
headerStyle: {backgroundColor: '#FF6FB2'},
headerTintColor: '#fff',
headerTitleStyle: {fontWeight: 'bold'} }}/>
<Stack.Screen name="DetailScreen"
component={DetailScreen}
options={{ title: 'Movie Detail',
headerTitle: (props) => <AppHeaderWoLogo {...props}/> }}/>
</Stack.Navigator>
</NavigationContainer>
);
}
export default AppHome;
const AppHeader = () => {
    return(
    <View style={{ flex: 1,
    width:'auto',
    flexDirection:'row',
    marginLeft:-15,
    paddingLeft:0 }}>
    <TextInput placeholder='Type here '
    style={{width:'80%',
    height:40,
    backgroundColor:'white',
    marginTop:5,
    marginLeft:10,
    marginRight:10}}
    />
    <Image style={{ width: 50, height: 50 }}
    source={require('./images/search.png')} />
    </View>
    );
    }
    const AppHeaderWoLogo = () => {
    return(
    <View style={{ flex: 1,
    width:'auto',
    flexDirection:'row',
    marginLeft:-15,
    paddingLeft:0 }}>
    <TextInput placeholder='Type here'
    style={{width:'66%',
    height:40,
    backgroundColor:'white',
    marginTop:5,
    marginLeft:10,
    marginRight:10}}
     />
    <Image style={{ width: 45, height: 45 }}
    source={require('./images/search.png')} />
    </View>
    );
    }
    