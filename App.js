import React from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';

function App() {
  function sayHello() {
    console.log('hello');
  }

  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <View>
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

export default App;
