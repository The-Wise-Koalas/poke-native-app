import React, { Component } from "react";
import { Text, View,TextInput,Image } from "react-native";
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
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Search for pokemons</Text>
            </View>
        );
    }
}
export default Search;
