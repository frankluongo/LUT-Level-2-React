import React, { Component } from 'react';
import styled from 'styled-components';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';
import { Card } from 'Elements';

const AnimatedCard = Card.withComponent(animated.div);
const DragCard = AnimatedCard.extend`
  position: absolute;
  height: 400px;
  width: 320px;
`;

const CardContainer = styled(animated.div)`
  position: relative;
  height: 400px;
  width: 320px;
  margin: 0 auto;

  background-color: #333;
`;


export default class Drag extends Component {

  onUp = xDelta => () => {
    console.log(xDelta);

    if (xDelta < -300) {
      alert('remove')
    } else if(xDelta > 300) {
      alert('accept');
    }

  }

  render() {
    return (
      <Gesture>
        {({ down, x, y, xDelta }) => (
          <Spring
            native
            to={{
              x: down ? xDelta : 0
            }}
            immediate={name => down && name === "x"}
          >

            {({x}) => (
              <CardContainer style={{
                background: x.interpolate({
                  range: [-300, 300],
                  output: ['#ff1c68', '#14d790'],
                  extrapolate: 'clamp'
                })
              }}>
                <DragCard
                  onMouseUp={this.onUp(xDelta)}
                  onTouchEnd={this.onUp(xDelta)}
                  style={{
                  opacity: x.interpolate({
                    range: [-300, -100],
                    output: [0, 1],
                    extrapolate: 'clamp'
                  }),
                  transform: interpolate(
                    [x,
                    x.interpolate({
                      range: [-300, 300],
                      output: [-45, 45],
                      extrapolate: 'clamp'
                    },
                    )],
                    (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`
                  )
                  //transform: x.interpolate(x => `translateX(${x}px)`)
                }}>
                  <h1>Drag Me</h1>
                </DragCard>
              </CardContainer>
            )}

          </Spring>
        )}
      </Gesture>
    )
  }
}
