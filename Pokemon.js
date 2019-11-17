import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
//===============================================================================//
class DetailsScreen extends Component {
  state = {
    pokemon: '',
    name: '',
    type: '',
    id: '',
    weight: '',
    height: '',
    def: '',
    attk: ''
  };
  //===============================================================================//
  componentDidMount() {
    let url = this.props.navigation.getParam('url');
    P.resource(url).then(response => {
      this.setState({
        pokemon: response,
        id: response.id,
        name: response.name,
        type: response.types[0].type.name,
        def: response.base_experience,
        attk: response.order
      });
    });
  }
  //===============================================================================//
  render() {
    const { name, type, attk, def, id, weight, height } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={getStylesTwo(type)}>
            <View style={styles.headerContent}>
              <Image
                style={styles.avatar}
                source={{
                  uri: `http://www.pokestadium.com/sprites/xy/${name}.gif`
                }}
              />
              <Text style={styles.name}>{name}</Text>
            </View>
          </View>
        </View>
        <View style={styles.profileDetail}>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Attack</Text>
            <Text style={styles.count}>{def}</Text>
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Defense</Text>
            <Text style={styles.count}>{attk}</Text>
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.title}>ID</Text>
            <Text style={styles.count}>{id}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <TouchableOpacity style={getStyles(type)}>
              <Text>{type}</Text>
            </TouchableOpacity>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
//===============================================================================//
export default DetailsScreen;
const selectColor = name => {
  switch (name) {
    case 'normal':
      return '#A8A77A';
    case 'fire':
      return '#ee8130';
    case 'water':
      return '#6390f0';
    case 'electric':
      return '#f7d02c';
    case 'grass':
      return '#7ac74c';
    case 'ice':
      return '#96d9d6';
    case 'fighting':
      return '#c22e28';
    case 'poison':
      return '#a33ea1';
    case 'ground':
      return '#e2bf65';
    case 'flying':
      return '#a98ff3';
    case 'psychic':
      return '#f95587';
    case 'bug':
      return '#a6b91a';
    case 'rock':
      return '#b6a136';
    case 'ghost':
      return '#735797';
    case 'dragon':
      return '#6f35fc';
    case 'dark':
      return '#705746';
    case 'steel':
      return '#b7b7ce';
    case 'fairy':
      return '#d685ad';
    default:
      return undefined;
  }
};
//===============================================================================//
const getStyles = name => {
  return {
    backgroundColor: selectColor(name),
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  };
};
//===============================================================================//
const getStylesTwo = name => {
  return {
    backgroundColor: selectColor(name)
  };
};
//===============================================================================//
const styles = StyleSheet.create({
  headerContent: {
    padding: 30,
    alignItems: 'center'
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600'
  },
  profileDetail: {
    alignSelf: 'center',
    marginTop: 200,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff'
  },
  detailContent: {
    margin: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#00CED1'
  },
  count: {
    fontSize: 18
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginTop: 40
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  description: {
    fontSize: 20,
    color: '#00CED1',
    marginTop: 10,
    textAlign: 'center'
  }
});
