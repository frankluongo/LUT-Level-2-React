import React, { Component } from 'react';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';
import { Card } from 'Elements';

const AnimatedCard = Card.withComponent(animated.div);


export default class Drag extends Component {
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
              <AnimatedCard style={{
                transform: x.interpolate(x => `translateX(${x}px)`)
              }}>
                <h1>Drag Me</h1>
              </AnimatedCard>
            )}

          </Spring>
        )}
      </Gesture>
    )
  }
}
