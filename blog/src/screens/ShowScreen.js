import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import useGlobalContext from "../context/AppContext";
import { AntDesign } from "@expo/vector-icons";
const ShowScreen = ({ navigation }) => {
  console.log();
  const { items } = useGlobalContext();
  const singleItem = items.find((item) => item.id == navigation.getParam("id"));
  //   console.log(singleItem);
  return (
    <View>
      <Text style={styles.textStyle}>{singleItem.title}</Text>
      <Text style={styles.textStyle}>{singleItem.content}</Text>
    </View>
  );
};
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <AntDesign name="edit" size={30} color="black" />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: "400",
    letterSpacing: 2,
    textAlignVertical: "auto",
    textAlign: "center",
    textShadowColor: "gray",
  },
});
export default ShowScreen;
