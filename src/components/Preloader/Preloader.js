import React, { Component } from 'react';
import styled, { css } from 'styled-components/macro';

const PreloaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  opacity: 1;
  transition: 0.4s ease;

  ${({ loading }) =>
    loading &
    css`
      opacity: 0;
    `}
`;

class Preloader extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <PreloaderWrap>
        <div className="spinner-border text-info" role="status" loading={loading}>
          <span className="sr-only">Loading...</span>
        </div>
      </PreloaderWrap>
    );
  }
}
export default Preloader;
