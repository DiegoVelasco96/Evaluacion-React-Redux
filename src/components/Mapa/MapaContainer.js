import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../state/Mapa/action';
import Mapa from './Mapa';
import Filters from './Filters';

class MapaContainer extends Component {
  componentDidMount() {
    this.props.getAllAircraft();
  }

  render() {
    return (
      <section>
        <Filters />
        <Mapa />
      </section>
    );
  }
}

export default connect(null, actions)(MapaContainer);
