import React,{Component} from "react";
import { Text, View } from "react-native";
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Pokemon goes here</Text>
      </View>
    );
  }
}
export default DetailsScreen;
