import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Index from "./src/screens/Index";
import { AppProvider } from "./src/context/AppContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import React from "react";

const navigator = createStackNavigator(
  {
    Index: Index,
    Show: ShowScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};
