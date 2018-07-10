import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";
import { connect } from "react-redux";
import LoginScreen from "../containers/Login";
import DashboardScreen from "../containers/Dashboard";
import SideBar from "../components/Sidebar"



const RootNavigator = DrawerNavigator(
    {
        login: { screen: LoginScreen },
        dashboard: { screen: DashboardScreen },

    },
    {
        contentComponent: props => <SideBar {...props} />
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


