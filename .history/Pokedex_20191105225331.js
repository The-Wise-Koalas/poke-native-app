import React, { Component } from "react";
import { Button, Text, View } from "react-native";
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();
class SettingsScreen extends Component {
  state = {
    pokemons : []
  };
    componentDidMount() {
        P.resource(["https://pokeapi.co/api/v2/pokemon/?limit=498&offset=0"]).then(
            response => {
                let x = response[0].results;
                this.setState({ pokedex: x });
                console.log(this.state.pokedex);
            }
        );
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
      <View>
            {this.state.pokedex.map(pokemon => (
                <Item key={pokemon.name} pokemon={pokemon} />
            ))}
      </View>
    );
  }
}
export default SettingsScreen;
