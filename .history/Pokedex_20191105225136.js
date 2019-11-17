import React, { Component } from "react";
import { Button, Text, View } from "react-native";
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();
class SettingsScreen extends Component {
  state = {
    pokemons : []
  };
  componentDidMount(){
      P.resource('/api/v2/pokemon/36')
          .then((response)=> {
            this.setState({pokemons : response})
        });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Pokedex goes here</Text>
        <Button
          title="Check out more"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}
export default SettingsScreen;
