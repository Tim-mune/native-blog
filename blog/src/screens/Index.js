import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import useGlobalContext from "../context/AppContext";
import { FlatList } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Index = ({ navigation }) => {
  const { items, addMe, deleteMe } = useGlobalContext();
  if (items.length < 1) {
    return (
      <Text style={{ fontSize: 35, textAlign: "center", marginTop: 100 }}>
        Please create a new blog{" "}
      </Text>
    );
  }
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyles}>{items.length}</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.textStyles}>
                  {item.title}-{item.id}
                </Text>
                <MaterialIcons
                  name="delete"
                  size={24}
                  color="black"
                  onPress={() => deleteMe(item.id)}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
Index.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <AntDesign name="plus" size={30} color="black" />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    padding: 15,
    borderBottomColor: "gray",
    borderRightWidth: 1,
    borderRightColor: "gray",
    borderBottomWidth: 2,
  },
  textStyles: {
    color: "black",
    fontSize: 20,
  },
});

export default Index;
