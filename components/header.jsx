import { View, StyleSheet, Text } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: "coral",
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
