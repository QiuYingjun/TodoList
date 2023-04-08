import { StyleSheet, Text, View } from "react-native";
export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    flex: 3,
    backgroundColor: "gold",
    // padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "green",
    // padding: 20,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "blue",
    // padding: 30,
  },
  boxFour: {
    flex: 1,
    backgroundColor: "red",
    // padding: 40,
  },
});
