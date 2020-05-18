import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Text,
  View,
  Button,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Tap the button to start/stop the clock.</Text>
      <TextInput
        defaultValue="20"
        onChangeText={(e) => setText(e)}
        placeholder="hello"
      />
      <Button title="TOGGLE COUNTER" />
      <Text>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
    </ScrollView>
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
