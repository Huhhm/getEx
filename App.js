
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <Text>Hello</Text>
      <Text>Feat A doing</Text>

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