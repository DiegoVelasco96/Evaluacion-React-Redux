import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mapa from './Mapa';

class MapaContainer extends Component {
  render() {
    return <Mapa />;
  }
}

export default connect(null)(MapaContainer);
