import React from "react";
import { TextInput, Button, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import SettingsScreen from "./Pokedex";
import DetailsScreen from "./Pokemon";

class HomeScreen extends React.Component {
  state = {
    name: ""
  };
  handleSearch = () => {
    P.getPokemonByName(this.state.word)
      .then(response => {
        this.setState({
          pokemon: response,
          type: response.types[0].type.name,
          sprite: response.sprites.back_default
        });
        console.log(this.state.pokemon);
      })
      .catch(function(error) {
        console.log("There was an ERROR: ", error);
      });
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Search for Pokemons</Text>
        <TextInput
          placeholder="charizard..."
          onChangeText={name => {
            this.setState({ name });
          }}
          value={this.state.name}
        />
        <Button title="search" />
        {/* <Button
          title="Check out more"
          onPress={() => this.props.navigation.navigate("Details")}
        /> */}
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen }
});

export default createAppContainer(
  createBottomTabNavigator({
    Home: { screen: HomeStack },
    Pokedex: { screen: SettingsScreen }
  })
);
