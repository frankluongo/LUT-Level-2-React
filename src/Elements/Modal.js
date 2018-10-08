import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal, position } from 'Utilities';
import Icon from './Icon';
import { Card } from './Cards';

const ModalWrapper = styled.div`
  ${position({})};
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = Card.extend`
  z-index: 10;
  ${position({pos: 'relative'})};

  width: 80%;
  max-width: 580px;

  padding: 30px;
  margin-bottom: 15vh;
`;

  const CloseButton = styled.button`
    ${position({x: 'right'})};

    padding: 10px;

    text-transform: uppercase;

    border: none;
    background-color: transparent;
    cursor: pointer;
  `;

const Background = styled.div`
${position({})};

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
              <CloseButton onClick={toggle}><Icon name="close" /></CloseButton>
              {children}
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        }
      </Portal>
    )
  }
}
