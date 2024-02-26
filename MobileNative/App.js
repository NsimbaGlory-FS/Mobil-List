import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Switch, StyleSheet, Text, View } from "react-native";

import Heading from "./components/Heading";
import ListContainer from "./components/ListContainer";

import styles from "./Appstyles";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  //https://crudapi-5b6affb4b9d9.herokuapp.com/api/v1/movies
  // fetch(`https://crudapi-5b6affb4b9d9.herokuapp.com/api/v1/movies`)
  //   .then((res) => res.json())
  //   .then((data) => console.log({ data }));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.largeHeading, styles.italicFont]}>
        Mobile Projects
      </Text>
      <Heading>This is a Heading</Heading>
      <ListContainer />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
