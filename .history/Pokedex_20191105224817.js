import React, { Component } from "react";
import { Button, Text, View } from "react-native";
class SettingsScreen extends Component {
  state = {

  };
  componentDidMount(){
      P.getPokemonByName(this.state.name)
          .then(response => {
              this.setState({
                  pokemon: response,
                  type: response.types[0].type.name,
                  sprite: response.sprites.front_default
              });
              console.log(this.state.pokemon);
          })
          .catch(function (error) {
              console.log("There was an ERROR: ", error);
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
