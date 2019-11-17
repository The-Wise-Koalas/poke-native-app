import React, { Component } from "react";
import { Button, Text, View } from "react-native";
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();
class SettingsScreen extends Component {
  state = {
    pokemons: []
  };
  componentDidMount() {
    P.resource(["https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0"]).then(
      response => {
        let x = response[0].results;
        this.setState({ pokemons: x });
        console.log(this.state.pokemons);
      }
    );
  }
  render() {
    return (
      <View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Pokedex goes here</Text>
          <Button
            title="Check out more"
            onPress={() => this.props.navigation.navigate("Details")}
          />
        </View>
      
          {this.state.pokemons.map((pokemon,key) => (
            <Text style={{padding : 10}}>{pokemon.name}</Text>
          ))}
        
        
      </View>
    );
  }
}
export default SettingsScreen;
