import React,{Component} from 'react';
import {
  TextInput,
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from './Pokedex';
import DetailsScreen from './Pokemon';
import BkPic from './assets/gege.jpg';
//===============================================================================//
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
//===============================================================================//
class HomeScreen extends Component {
  state = {
    name: ''
  };
  //===============================================================================//
  render() {
    const { name } = this.state;
    return (
      <ImageBackground source={BkPic} style={styles.bk}>
        <View style={styles.main}>
          <Text style={styles.text}>Search for your favorite Pokemon!</Text>
          <TextInput
            placeholder='charizard...'
            onChangeText={name => {
            this.setState({ name });
            }}
            value={name}/>
          <Button
            title='search'
            onPress={() =>
              this.props.navigation.navigate('Details', {
                url: `https://pokeapi.co/api/v2/pokemon/${name}/`
              })
            }
          />
        </View>
      </ImageBackground>
    );
  }
}
//===============================================================================//
const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});
//===============================================================================//
const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen }
});
//===============================================================================//
export default createAppContainer(
  createBottomTabNavigator({
    Search: { screen: HomeStack },
    Pokedex: { screen: SettingsScreen }
  })
);
//===============================================================================//
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  bk : {
    width: '100%',
    height: '100%' 
  }
});
