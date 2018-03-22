import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Switch, InputNumber, Input } from 'antd';
import styled from 'styled-components';
import * as actions from '../../state/Mapa/action';

const ContentFilters = styled.div`
  width: 1024px;
  margin: 10px auto;
`;

const Label = styled.label`
  margin-right: 5px;
`;

class Filters extends Component {
  render() {
    return (
      <ContentFilters>
        <Row>
          <Col xs={24} sm={24} md={24} lg={3}>
            <Input
              size="small"
              value={'En vuelo ' + this.props.enVuelo}
              disabled={true}
              style={{ width: '110px' }}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={3}>
            <Button
              type="primary"
              loading={this.props.loading}
              onClick={this.props.getAllAircraft}>
              Actualizar
            </Button>
          </Col>
          <Col xs={24} sm={24} md={24} lg={4}>
            <Label>Tiempo real:</Label>
            <Switch onChange={this.props.setRealTime} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={6}>
            <Label>Cantidad de aviones:</Label>
            <InputNumber
              defaultValue={this.props.countShowAir}
              onChange={this.props.showAir}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={6}>
            <Label>País:</Label>
            <Input style={{ width: '200px' }} />
          </Col>
        </Row>
      </ContentFilters>
    );
  }
}

const mapStateToProps = state => ({
  vuelos: state.mapa.aircraf,
  enVuelo: state.mapa.enVuelo,
  loading: state.mapa.loading,
  countShowAir: state.mapa.showAir,
});

export default connect(mapStateToProps, actions)(Filters);
