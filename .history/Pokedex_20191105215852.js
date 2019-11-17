import React,{Component} from "react";
import { Button, Text, View } from "react-native";
class SettingsScreen extends Component {
state ={
    
}
    render(){
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
  render() {
 
}
export default SettingsScreen;
