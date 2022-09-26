import React from "react";
import { Text, StyleSheet, View } from "react-native";

const AboutTheAppScreen = params => {
  return <View style={styles.container}>
      <Text style={styles.headingTxt}>Ideas to code.</Text>
    <View style={styles.tJTmcqiF}></View></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#12054a"
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12,
    position: "absolute",
    left: 26,
    top: 118,
    textAlign: "center",
    width: 318,
    height: 36,
    color: "#fff"
  },
  tJTmcqiF: {
    left: 62,
    top: 131,
    position: "absolute",
    height: 40,
    width: 241,
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    color: "#777777",
    opacity: 0.2,
    transform: "rotate(0deg)"
  }
});
export default AboutTheAppScreen;