import React from 'react';
import {Text, View, SafeAreaView, Button, StyleSheet} from 'react-native';

function App() {
  function sayHello() {
    console.log('hello');
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.upper_view_container}>
        {/* <Text style={{color: 'purple', fontSize: 50}}>Hello World</Text> */}
        <Text>Hello World</Text>
      </View>
      {/* <Button
        title="Here press!"
        onPress={sayHello}
        disabled={false}
        color="#e6e6fa"
      /> */}
      <View style={style.bottom_view_container}>
        <Text>Hello 2</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  //bu kısım json objesi
  // container: {
  //   backgroundColor: "red",
  //   margin: 20,
  //   borderRadius: 8,
  // }
  container: {
    flex: 1, 
    flexDirection: 'row'
  },
  upper_view_container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  bottom_view_container: {
    flex: 2,
    backgroundColor: 'yellow',
  },
});

export default App;

//not
//stillendirme de web'deki gibi px yok direk rakam veriyoruz. : margin: 10,
//en dıştakine flex vermezsek childlar da çalışmaz.
//flex yoksa bulunduğu alan kadar yer kaplayacak.
