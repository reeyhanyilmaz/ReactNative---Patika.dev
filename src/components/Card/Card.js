import React from 'react';
import style from './Card.style';
import {Text, View, TouchableOpacity, Alert} from 'react-native';

const Card = props => {
  return (
    <View style={style.cardContainer}>
      <View style={style.cardBody}>
        <Text style={style.cardTitle}>{props.title}</Text>
        <Text style={style.cardText}>{props.text}</Text>
      </View>
      <TouchableOpacity style={style.cardButtonContainer} onPress={() => Alert.alert("Merhaba! " + props.title)}>
        <Text style={style.cardButtonTitle}>I Liked</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
