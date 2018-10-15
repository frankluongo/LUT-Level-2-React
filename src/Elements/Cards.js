import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  color: ${black};
  max-width: 320px;
  margin: 0 auto;
  padding: 15px;

  ${elevation[2]};
  ${transition({
    property: 'box-shadow'
  })};
  &:hover {
    ${elevation[0]};
  }
`;
