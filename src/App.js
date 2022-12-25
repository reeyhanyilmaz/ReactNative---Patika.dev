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

//FlatList ekranda kullanıcı ne kadar veri görecekse o kadarını basar. Cihazı fazla yormayı önler.
//Veriyi tek tek yükler bir anda yükleyip yormayı önler.
//FlatList data ve renderItem diye iki prop döner. data verilerimiz, renderItem her bir item'larımız.

//Dimensions : Dimensions.get("window").heigth /4 : ekranın yüksekliğinin 4'de 1!i demek.
//style'da height: Dimensions.get("window").heigth /4 şeklinde verebiliriz.

//keyExtractor ={(item, index) => item.u_id.toString()}
//keyExtractor : biz ekranda görmüyorsak verileri siler, ihtiyac duurmıunda ekrana tekrar basılır veriler, hangisini basacağını veya kaldıracağını belirtmek için kullanılır.
//id string ise toString()'e ihtiyaç yok.

//renderItem = ({item}) => <NewsCard news={item} />} renderItem'ı FlatList içinde bu şekilde verirsek 200 veri olursa 200 kere arrow func. çalışacak ama yukarda const renderNews = ({item}) => <NewsCard news={item} /> şeklinde tanımlayıp , rendderItem'a renderItem = {renderNews} verirsel 200 kere func çağırılır ama 200 kere çalışmaz func. daha verimlidir.


//aynı şekilde keyExtractor'da func halinde çağırılabilir.


//ScrolView component'i bize scrol özelliğini kullanmamıza olanak tanır. <FlatList ListHeaderComponent={ buraya <ScrollView horizontal showHorizontaşScroolIndıcator={false} /> bunu yazarsak yukarıda sticky şekilde kalmaz scroll comp. flatlist içinde olur.}