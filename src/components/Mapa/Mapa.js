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

// const Aeronaves = styled.div`
//   width: 6px;
//   height: 6px;
//   border-radius: 5px;
// background: ${props =>
//   props.altura > 30000 ? 'red' : props.altura < 1000 ? 'blue' : 'green'};
//   z-index: 2;
//   position: absolute;
// top: ${props =>
//   props.top > 0
//     ? 261.5 * (90 - props.top) / 90
//     : 261.5 + (261.5 * (props.top * -1)) / 90}px;
// left: ${props =>
//   props.left > 0
//     ? 512 + (512 * props.left - 180) / 180
//     : 512 * (props.left + 180) / 180}px;
//   display: ${props => (props.hidden ? 'none' : 'inline-block')};
// `;
class Mapa extends Component {
  style(hidden, top, left, altura) {
    return {
      width: '6px',
      height: '6px',
      'border-radius': '5px',
      display: 'inline-block',
      position: 'absolute',
      background: 'red',
      display: hidden ? 'none' : 'inline-block',
      background: altura > 30000 ? 'red' : altura < 1000 ? 'blue' : 'green',
      top:
        (top > 0 ? 261.5 * (90 - top) / 90 : 261.5 + 261.5 * (top * -1) / 90) +
        'px',
      left:
        (left > 0 ? 512 + (512 * left - 180) / 180 : 512 * (left + 180) / 180) +
        'px',
    };
  }
  render() {
    return (
      <ContentMapa>
        {this.props.vuelos.map(vuelo => (
          <div
            key={vuelo.Id}
            country={vuelo.Cou}
            style={this.style(vuelo.hidden, vuelo.Lat, vuelo.Long, vuelo.Alt)}
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
