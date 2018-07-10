//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  Button,
  CardItem,
  Card
} from "native-base";

// create a component
class Login extends Component {
  render() {

    const { navigation } = this.props.navigation.navigate;
    return (
      <Container style={styles.container}>
        <Content>
          <Card style={styles.cardstyles}>
            <CardItem style={styles.logincontainer}>
              <Input
                rounded
                placeholder="UserName"
                style={styles.placeholder}
              />
              <Input
                rounded
                placeholder="Password"
                style={styles.placeholder}
              />
              <Button rounded style={styles.buttonstyle} 
              onPress={()=> this.props.navigation.navigate('dashboard')}>
                <Text style={styles.buttontext}> Login </Text>
              </Button> 
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },

  logincontainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  placeholder: {
    width: "100%",
    margin: 5
  },
  buttonstyle: {
    padding: 10,
    alignSelf: "center"
  },
  buttontext: { color: "#fff", padding: 10, fontSize: 18 },
  cardstyles: {
    margin: 30,
    elevation: 4,
    borderRadius: 4,
    padding: 10,
    marginLeft: 30,
    marginRight: 30
  }
});

//make this component available to the app
export default Login;
