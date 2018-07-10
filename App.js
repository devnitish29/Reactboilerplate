import React, { Component } from "react";
import { addNavigationHelpers, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
// import storeFactory from "./src/store/store"; 
import RootNavigator from "./src/navigation/AppNavigator";
import LoginScreen from "./src/containers/Login";
import DashboardScreen from "./src/containers/Dashboard";

export default class App extends Component {
  render() {
    return (
      // <Provider store={storeFactory}>
        <RootNavigator/>
      // </Provider>
    );
  } 
}

