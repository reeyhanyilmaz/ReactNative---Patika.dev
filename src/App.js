import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card';

function App() {
  function sayHello() {
    console.log('hello');
  }

  return (
    <SafeAreaView style={style.container}>
      {/* <View style={style.upper_view_container}> */}
      {/* <Text style={{color: 'purple', fontSize: 50}}>Hello World</Text> */}
      {/* <Text>Hello World</Text>
      </View> */}
      {/* <Button
        title="Here press!"
        onPress={sayHello}
        disabled={false}
        color="#e6e6fa"
      /> */}
      {/* <View style={style.bottom_view_container}>
        <Text>Hello 2</Text>
      </View> */}

      {/* custom component part **************************** */}
      <Card title="Reyhan" text="frontend and mobile developer" />
      <Card title="Mabel Matiz" text="Antidepresan" />
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
  // container: {
  //   flex: 1,
  //   flexDirection: 'row'
  // },
  // upper_view_container: {
  //   flex: 1,
  //   backgroundColor: 'purple',
  // },
  // bottom_view_container: {
  //   flex: 2,
  //   backgroundColor: 'yellow',
  // },

  //custom component part ****************************
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;

//not
//stillendirme de web'deki gibi px yok direk rakam veriyoruz. : margin: 10,
//en dıştakine flex vermezsek childlar da çalışmaz.
//flex yoksa bulunduğu alan kadar yer kaplayacak.

//TouchableOpacity custom button olarak kullanırız burada
