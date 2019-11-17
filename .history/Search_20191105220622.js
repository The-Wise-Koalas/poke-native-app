import React, { Component } from "react";
import { Text, View,TextInput,Image } from "react-native";
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            word: "",
            type: [],
            sprite: ""
        };
    }
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
            .catch(function (error) {
                console.log("There was an ERROR: ", error);
            });
    };

    handleChange = e => {
        this.setState({ word: e.target.value });
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Search for pokemons</Text>
                <TextInput onChangeText={this.handleChange} placeholder="ditto..."/>
            </View>
        );
    }
}
export default Search;
