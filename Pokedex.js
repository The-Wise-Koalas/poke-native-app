import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  Image
} from 'react-native';
import BkPic from './assets/gege.jpg';
import { Column as Col, Row } from 'react-native-flexbox-grid';
//===============================================================================//
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
//===============================================================================//
class SettingsScreen extends Component {
  state = {
    pokemons: [],
  };
  //===============================================================================//
  componentDidMount() {
    P.resource(['https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0']).then(
      response => {
        let x = response[0].results;
        this.setState({ pokemons: x });
        console.log(this.state.pokemons);
      }
    );
  }
  //===============================================================================//
  render() {
    return (
      <ImageBackground source={BkPic} style={{ width: '100%', height: '100%' }}>
        <View style={{ margin: 10, marginTop: 50 }}>
          <ScrollView>
            <View>
              <Row size={12}>
                {this.state.pokemons.map((pokemon, key) => (
                  <Col key={key} sm={4} md={4} lg={4}>
                    <TouchableHighlight
                      style={styles.pokedex}
                      onPress={() =>
                        this.props.navigation.navigate('Details', {
                          url: pokemon.url
                        })
                        }>
                      <View>
                        <Text key={key} style={styles.text}>
                          {pokemon.name}
                        </Text>
                        <Image
                          style={styles.pic}
                          source={{
                            uri: `http://www.pokestadium.com/sprites/xy/${pokemon.name}.gif`
                          }}
                        />
                      </View>
                    </TouchableHighlight>
                  </Col>
                ))}
              </Row>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
export default SettingsScreen;
// ============================================================================
const styles = StyleSheet.create({
  pokedex: {
    borderWidth: 1,
    borderColor: 'white'
  },
  text: {
    padding: 10,
    color: 'white'
  },
  pic: {
    width: 45,
    height: 45
  }
});
