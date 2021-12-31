import {StyleSheet} from 'react-native'
export default StyleSheet.create({
 text_big: {
 fontWeight: 'bold', fontSize: 25
 },
 container: {
 flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white"},
 
 button:{
    flex: 1,
    justifyContent: 'center',
    marginHorizontal:100,
    marginVertical:5,
    
 },

 title: {
    textAlign: 'center',
    marginVertical: 30,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40,
    margin: 25,
    borderBottomWidth:5,
    padding: 10,
  },
});