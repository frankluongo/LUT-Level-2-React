import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-spring';

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
        <Transition
          from={{opacity: 0, bgOpacity: 0, y: -50}}
          enter={{opacity: 1, bgOpacity: 0.5, y: 0}}
          leave={{opacity: 0, bgOpacity: 0, y: 200}}
        >
          {on && (
            (styles) => (
            <ModalWrapper>
              <ModalCard style={{
                transform: `translate3d(0, ${styles.y}px, 0)`,
                ...styles}}>
                <CloseButton onClick={toggle}><Icon name="close" /></CloseButton>
                {children}
              </ModalCard>
              <Background style={{opacity: styles.bgOpacity}} onClick={toggle} />
            </ModalWrapper>
          ))}
        </Transition>
      </Portal>
    )
  }
}
