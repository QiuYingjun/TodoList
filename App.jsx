import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy1", key: "1" },
    { text: "buy2", key: "2" },
    { text: "buy3", key: "3" },
  ]);
  const pressHandler = (key) => {
    setTodos((prev) => {
      return prev.filter((it) => it.key != key);
    });
  };
  const saveHandler = (text) => {
    if (text.length > 3) {
      const newTodos = [{ text, key: new Date().valueOf() }, ...todos];
      setTodos(newTodos);
    } else {
      Alert.alert("OOps", "must be over 3 chars", [
        {
          text: "OK",
          onPress: () => {
            console.log("ok");
          },
        },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo saveHandler={saveHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  content: {
    flex: 1,
    padding: 40,
    marginBottom: 10,
    // backgroundColor: "grey",
  },
  list: {
    flex: 1,
    // backgroundColor: "yellow",
    marginTop: 20,
  },
});
