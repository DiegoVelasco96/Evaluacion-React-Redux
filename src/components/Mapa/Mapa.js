import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ContentMapa = styled.div`
  width: 1024px;
  height: 523px;
  background-image: url('assets/images/mapa.png');
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
  position: relative;
`;

const Aeronaves = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 5px;
  background: ${props =>
    props.altura > 30000 ? 'red' : props.altura < 1000 ? 'blue' : 'green'};
  z-index: 2;
  display: inline-block;
  position: absolute;
  top: ${props =>
    props.top > 0
      ? 249.5 * (90 - props.top) / 90
      : 249.5 + 249.5 * (props.top * -1) / 90}px;
  left: ${props =>
    props.left > 0
      ? 495.5 + (495.5 * props.left - 180) / 180
      : 495.5 * (props.left + 180) / 180}px;
  visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
`;

class Mapa extends Component {
  render() {
    return (
      <ContentMapa>
        {this.props.vuelos.map(vuelo => (
          <Aeronaves
            key={vuelo.Id}
            top={vuelo.Lat}
            left={vuelo.Long}
            altura={vuelo.Alt}
            country={vuelo.Cou}
            hidden={vuelo.hidden}
          />
        ))}
      </ContentMapa>
    );
  }
}

const mapStateToProps = state => ({
  vuelos: state.mapa.aircraf,
  showAir: state.mapa.showAir,
});

export default connect(mapStateToProps)(Mapa);
