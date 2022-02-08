
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <Text>Hello</Text>
      <Text>Feat A doing</Text>
      <Text style={{fontSize:20,color:'red'}}>Feat B doing</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})
export default App;