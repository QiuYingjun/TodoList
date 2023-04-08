import { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

export default function AddTodo({ saveHandler }) {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo ..."
        onChangeText={setText}
      />
      <Button
        title="Save"
        onPress={() => {
          saveHandler(text);
        }}
        color="coral"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
