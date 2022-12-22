import React from 'react';
import {Text, View, SafeAreaView, Button, StyleSheet} from 'react-native';

function App() {
  function sayHello() {
    console.log('hello');
  }

  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={{color: 'purple', fontSize: 50}}>Hello World</Text>
      </View>
      <Button
        title="Here press!"
        onPress={sayHello}
        disabled={false}
        color="#e6e6fa"
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  //bu kısım json objesi
  container: {
    backgroundColor: "red",
    margin: 20,
    borderRadius: 8,
  }
})

export default App;
