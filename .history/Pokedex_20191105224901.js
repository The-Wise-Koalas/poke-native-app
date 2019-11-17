import React, { Component } from "react";
import { Button, Text, View } from "react-native";
class SettingsScreen extends Component {
  state = {

  };
  componentDidMount(){
      P.resource(['/api/v2/pokemon/36])
          .then(function (response) {
              console.log(response); // resource function accepts singles or arrays of URLs/paths
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
