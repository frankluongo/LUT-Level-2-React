import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from './Portal';

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  z-index: 10;
  position: relative;

  width: 80%;
  max-width: 580px;

  padding: 30px;
  margin-bottom: 15vh;

  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 30px 5px rgba(0,0,0,0.25);
`;

  const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;

    text-transform: uppercase;

    border: none;
    background-color: transparent;
  `;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: #000000;
  opacity: 0.3;
`;

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on &&
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>Close</CloseButton>
              {children}
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        }
      </Portal>
    )
  }
}
