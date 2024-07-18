import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const Welcome = ({ navigation }) => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));

//this is will initiate a fade animation when user clicks on Let's begin button
//and navigate the user to QuizPage
  const startQuiz = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1900,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/image1.jpeg")} />
      <View style={styles.subContainer}>
        <Text style={styles.text}>Ready For your mind Test?</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Quiz");
          startQuiz();
        }}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Let's Begin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItem: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItem: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
  btn: {
    backgroundColor: "#fac782",
    paddingHorizontal: 5,
    paddingVertical: 15,
    position: "relative",
    borderRadius: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
    letterSpacing: 1.1,
  },
});
export default Welcome;