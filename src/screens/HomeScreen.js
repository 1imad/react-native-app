import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import image from "../../assets/Imad.png";

const HomeScreen = () => {
  const name = "Imad Ahmed"
  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>My first react native app.</Text>
      <Image style={styles.image} source={image}></Image>
      <Text style={styles.paragraph}>Hi, My name is <Text style={styles.bold}>{name}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    textTransform: "capitalize"
  },
  paragraph:{
    fontSize: 15,
    textAlign: "center"
  },
  image:{
    height: 200,
    width: 200,
    alignSelf:"center",
    marginBottom: 10,
    borderRadius: 10
  },
  mainView: {
    textAlign: "center"
  },
  bold:{
    fontWeight: "bold"
  }
});

export default HomeScreen;
