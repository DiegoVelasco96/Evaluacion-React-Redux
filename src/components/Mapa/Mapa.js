import React from 'react';
import styled from 'styled-components';

const ContentMapa = styled.div`
  width: 1024px;
  height: 523px;
  background-image: url('assets/images/mapa.png');
  background-repeat: no-repeat;
  background-size: contain;
`;

function Mapa() {
  return <ContentMapa />;
}

export default Mapa;
