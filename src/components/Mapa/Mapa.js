import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Radium from 'radium';

const ContentMapa = styled.div`
  width: 1024px;
  height: 523px;
  background-image: url('assets/images/mapa.png');
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
  position: relative;
`;

class Mapa extends Component {
  style(vuelo) {
    return {
      width: '6px',
      height: '6px',
      borderRadius: '5px',
      position: 'absolute',
      display: vuelo.hidden ? 'none' : 'inline-block',
      background:
        vuelo.Alt > 30000 ? 'red' : vuelo.Alt < 1000 ? 'blue' : 'green',
      top:
        (vuelo.Lat > 0
          ? 261.5 * (90 - vuelo.Lat) / 90
          : 261.5 + 261.5 * (vuelo.Lat * -1) / 90) + 'px',
      left:
        (vuelo.Long > 0
          ? 512 + (512 * vuelo.Long - 180) / 180
          : 512 * (vuelo.Long + 180) / 180) + 'px',
      ':hover': {
        transform: 'scale(2)',
        zIndex: '2',
      },
    };
  }
  render() {
    return (
      <ContentMapa>
        {this.props.vuelos.map(vuelo => (
          <div key={vuelo.Id} country={vuelo.Cou} style={this.style(vuelo)} />
        ))}
      </ContentMapa>
    );
  }
}

const mapStateToProps = state => ({
  vuelos: state.mapa.aircraf,
});

export default connect(mapStateToProps)(Radium(Mapa));
