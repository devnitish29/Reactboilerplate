//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Header,
  Button,
  Body,
  Left,
  Icon,
  Title,
  Card,
  CardItem
} from "native-base";

// create a component
class Dashboard extends Component {
  render() {
    return (
      <Container > 
        <Content>
          <Header>
            <Left>
              <Button transparent>
                <Icon
                  type="Feather"
                  name="menu"
                  onPress={() => this.props.navigation.openDrawer()}
                />
              </Button>
            </Left>
            <Body>
              <Title style={styles.headertitle}>Dashboard</Title>
            </Body>
          </Header>

          <Card style={styles.cardContainer}>
            <CardItem>
              <Text style={styles.cardItemText}>Data</Text>
            </CardItem>
          </Card>
          <Card style={styles.cardContainer}>
            <CardItem>
              <Text style={styles.cardItemText}>Data</Text>
            </CardItem>
          </Card>
          <Card style={styles.cardContainer}>
            <CardItem>
              <Text style={styles.cardItemText}>Data</Text>
            </CardItem>
          </Card>
          <Card style={styles.cardContainer}>
            <CardItem>
              <Text style={styles.cardItemText}>Data</Text>
            </CardItem>
          </Card>
          <Card style={styles.cardContainer}>
            <CardItem >
              <Text style={styles.cardItemText}>Data</Text>
            </CardItem>
          </Card>
          <Card style={styles.cardContainer}>
            <CardItem >
              <Text style={styles.cardItemText}>Data</Text>
            </CardItem>
          </Card>
          <Card style={styles.cardContainer}>
            <CardItem >
              <Text style={styles.cardItemText}>Data</Text>
            </CardItem>
          </Card>
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
  },
  headertitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  cardContainer: {
    marginLeft: 10,
    marginRight: 10,
    elevation: 4
  },
  cardItemText: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    alignSelf: 'center',
  }
});

//make this component available to the app
export default Dashboard;
