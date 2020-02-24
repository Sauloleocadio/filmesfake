import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

class Filmes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({visible: !this.state.visible}), 2000);
  }

  render() {
    const {nome, sinopse, foto} = this.props.data;
    return (
      <View>
        <View style={styles.card}>
          <Text style={styles.titulo}>{nome}</Text>
          <ShimmerPlaceHolder
            style={styles.shimmer}
            autoRun={true}
            visible={this.state.visible}>
            <Image source={{uri: foto}} style={styles.capa} />
          </ShimmerPlaceHolder>

          <View style={styles.areaBotao}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => alert(sinopse)}>
              <Text style={styles.botaoTexto}>LEIA MAIS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    padding: 15,
    color: '#be2edd',
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9,
  },
  botao: {
    width: 100,
    backgroundColor: '#be2edd',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto: {
    textAlign: 'center',
    color: '#fff',
  },
  shimmer: {
    height: 250,
    width: 330,
  },
});

export default Filmes;
