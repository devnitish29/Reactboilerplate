//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Container, Content, Header, Button,Body,Left, Icon,Title} from 'native-base';

// create a component
class Dashboard extends Component {


  render() {
    return (
      <Container>
        <Content>
        <Header>
        <Left>
          <Button transparent 
          >
            <Icon type="Feather" name="menu"
            onPress={() => this.props.navigation.openDrawer()}/>
          </Button>
        </Left>
        <Body>
          <Title   style={{color:'#fff',fontSize:16,fontWeight:'bold' }}>Dashboard</Title>
          </Body>
        </Header>
        </Content>
    
      </Container>
    
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default Dashboard;
