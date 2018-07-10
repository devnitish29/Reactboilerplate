import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";
import DashboardScreen  from './Dashboard';
import SideBar from "../../components/Sidebar"


const DashboardNavigator = DrawerNavigator(
    {
        dashboard: { screen: DashboardScreen },

    },

    {
    contentComponent: props => <SideBar {...props} />
  }, 
    {
        initialRouteName: "dashboard"
    }
);


export default DashboardNavigator;