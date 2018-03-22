import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../state/Mapa/action';
import Mapa from './Mapa';
import Filters from './Filters';

class MapaContainer extends Component {
  componentDidMount() {
    this.props.getAllAircraft();

    setInterval(() => this.realTime(), 20000);
  }

  realTime() {
    if (this.props.realTime) {
      this.props.getAllAircraft();
    }
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

const mapStateToProps = state => ({
  realTime: state.mapa.realTime,
  vuelos: state.mapa.aircraf,
});

export default connect(mapStateToProps, actions)(MapaContainer);
