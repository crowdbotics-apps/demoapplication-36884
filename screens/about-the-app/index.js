import React from "react";
import { Text, StyleSheet, View } from "react-native";

const AboutTheAppScreen = params => {
  return <View style={styles.container}>
      <Text style={styles.headingTxt}>Ideas to code in minutes.</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
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
    left: 4,
    top: 301,
    textAlign: "center",
    width: 318,
    height: 36,
    color: "#fff"
  }
});
export default AboutTheAppScreen;