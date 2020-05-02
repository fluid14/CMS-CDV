import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px',
};

const MapWrap = styled.div`
  margin-top: 2em;
  height: 400px;
  width: 100%;

  & div {
    height: 400px;
  }
`;

const MapContainer = ({ google, lat, lng }) => (
  <MapWrap>
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: { lat },
        lng: { lng },
      }}
    />
  </MapWrap>
);

MapContainer.propTypes = {
  lat: PropTypes.string.isRequired,
  lng: PropTypes.number.isRequired,
  google: PropTypes.element.isRequired,
};

export default GoogleApiWrapper({
  apiKey: 'api_key',
})(MapContainer);
