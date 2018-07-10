import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { connect } from "react-redux";
import LoginScreen from "../containers/Login";
import DashboardScreen from "../containers/dasboard/index";



const RootNavigator = StackNavigator(
    {
        login: { screen: LoginScreen },
        dashboard: { screen: DashboardScreen }
    },
    {
        headerMode: 'none',
        initialRouteName: "login"
    }
);


export default RootNavigator;

// class Nav extends Component {
//     render() {
//       return (
//         <Navigator navigation={addNavigationHelpers({
//           dispatch: this.props.dispatch,
//           state: this.props.navigation,
//         })} />
//       )
//     }
//   }

//   const mapStateToProps = state => ({
//     navigation: state.navigation,
//   })

//   export default connect(mapStateToProps)(Nav)


