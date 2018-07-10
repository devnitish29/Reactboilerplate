import React, { Component } from "react";
import { addNavigationHelpers, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
// import storeFactory from "./src/store/store"; 
import RootNavigator from "./src/navigation/AppNavigator";


export default class App extends Component {
  render() {
    return (
      // <Provider store={storeFactory}>
        <RootNavigator/>
      // </Provider>
    );
  } 
}

