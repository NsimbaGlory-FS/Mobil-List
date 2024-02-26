import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Switch,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

import styles from "./Appstyles";

export default function Categories({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={[styles.largeHeading, styles.italicFont, styles.headingColor]}
      >
        Categories{" "}
      </Text>
      <Button title="Go To Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </SafeAreaView>
  );
}
