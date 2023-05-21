import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useGlobalContext from "../context/AppContext";
const ShowScreen = ({ navigation }) => {
  console.log();
  const { items } = useGlobalContext();
  const singleItem = items.find((item) => item.id == navigation.getParam("id"));
  console.log(singleItem);
  return (
    <View>
      <Text>{singleItem.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ShowScreen;
