import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import useGlobalContext from "../context/AppContext";

const EditScreen = ({ navigation }) => {
  const { items, updateMe } = useGlobalContext();
  const id = navigation.getParam("id");
  const itemFound = items.find((item) => item.id == id);
  const [title, setTitle] = useState(itemFound.title);
  const [content, setContent] = useState(itemFound.content);
  console.log(itemFound);
  return (
    <View style={styles.ViewStyles}>
      <Text style={styles.textStyle}>Enter Title:</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={(newtext) => setTitle(newtext)}
      />
      <Text style={styles.textStyle}>Enter content:</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={(newtext) => setContent(newtext)}
      />
      <Button
        title="Edit Blog post"
        style={styles.button}
        onPress={() => updateMe(id, title, content, navigation.pop())}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  ViewStyles: {
    flexDirection: "column",
    gap: 5,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
    margin: 10,
    height: "60%",
    width: "100%",
  },
  textInput: {
    backgroundColor: "#F0EEEE",
    height: 40,
    width: "80%",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "gray",
    padding: 0,
    borderRadius: 8,
    alignSelf: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 2,
    textAlignVertical: "auto",
  },
  button: {
    alignSelf: "center",
  },
});
export default EditScreen;
