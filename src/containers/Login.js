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
import LoginAPI from '../actions/apis/login'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import APITransport from '../actions/apitransport/apitransport';


// create a component
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      role: ''
    }
  }

  
 
  // processInputReceived = (e, { name, value }) => this.setState({ [name]: value })

  processLoginButtonPressed = () => {
    // const { email, password } = this.state;
    // let apiObj = new LoginAPI(email, password)
    // this.props.APITransport(apiObj)
    // const { navigation } = this.props.navigation.navigate;
    // navigation('dashboard');
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container}>
        <Content>
          <Card style={styles.cardstyles}>
            <CardItem style={styles.logincontainer}>
              <Input
                rounded
                placeholder="UserName"
                onChange={this.processInputReceived}
                style={styles.placeholder}
              />
              <Input
                rounded
                placeholder="Password"
                
                onChange={this.processInputReceived}
                style={styles.placeholder}
              />
              <Button rounded style={styles.buttonstyle} 
              onPress={()=> navigate("dashboard")}>
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

const mapStateToProps = (state) => {
  return {
    user: state.login,
    apistatus: state.apistatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    APITransport: APITransport
  }, dispatch)
}


//make this component available to the app
export default connect(mapStateToProps,mapDispatchToProps)(Login);
