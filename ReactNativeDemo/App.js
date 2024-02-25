import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Heading from "./Heading";

export default function App() {
  //https://crudapi-5b6affb4b9d9.herokuapp.com/api/v1/movies
  fetch(`https://crudapi-5b6affb4b9d9.herokuapp.com/api/v1/movies`)
    .then((res) => res.json())
    .then((data) => console.log({ data }));

  return (
    <SafeAreaView style={styles.container}>
      <Text>Mobile Projects</Text>
      <Heading>This is a Heading</Heading>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
