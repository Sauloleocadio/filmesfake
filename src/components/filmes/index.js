import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

class Filmes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      modalVisible: false,
    };

    this.entrar = this.entrar.bind(this);
    this.voltar = this.voltar.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({visible: !this.state.visible}), 2000);
  }

  entrar() {
    this.setState({
      modalVisible: true,
    });
  }

  voltar(visible) {
    this.setState({
      modalVisible: visible,
    });
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
            <TouchableOpacity style={styles.botao} onPress={this.entrar}>
              <Text style={styles.botaoTexto}>LEIA MAIS</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.modalVisible}>
          <View style={styles.cardModal}>
            <Text style={styles.tituloModal}>{nome}</Text>
            <Text style={styles.textoModal}>{sinopse}</Text>
            <Button
              // style={styles.botaoModal}
              title="Voltar"
              onPress={() => this.voltar(false)}
              color={'#be2edd'}
            />
          </View>
        </Modal>
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
  cardModal: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    // height: 350,
    borderRadius: 15,
  },
  tituloModal: {
    fontSize: 27,
    fontStyle: 'italic',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    color: '#be2edd',
    textAlign: 'center',
  },
  textoModal: {
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Filmes;
