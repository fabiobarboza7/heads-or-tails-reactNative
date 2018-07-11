import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';

export default class app6 extends Component {
  render() {
    return(
      <Router>
        <Scene key='app'>
          <Scene key='principal' component={Principal} title="Cara ou Coroa"/>
          <Scene key='sobrejogo' component={SobreJogo} title="Sobre o Jogo"/>
          <Scene key='outrosjogos' component={OutrosJogos} title="Outros Jogos"/>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('headsOrTails', () => app6);
