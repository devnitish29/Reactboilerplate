import React, { Component } from "react";
import { createStackNavigator,createDrawerNavigator } from "react-navigation";
import { connect } from "react-redux";
import LoginScreen from "../containers/Login";
import DashboardScreen from "../containers/dasboard/Dashboard";
import SideBar from "../components/Sidebar";


const Drawer = createDrawerNavigator(
    {
        Dashboard: { screen: DashboardScreen },

    },

    {
    contentComponent: props => <SideBar {...props} />
  }, 
    {
        initialRouteName: "Dashboard"
    }
);

const RootNavigator = createStackNavigator(
    {
        login: { screen: LoginScreen },
        drawer: { screen: Drawer }
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


