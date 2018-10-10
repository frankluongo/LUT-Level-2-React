import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  color: ${black};

  ${elevation[2]};
  ${transition({
    property: 'box-shadow'
  })};
  &:hover {
    ${elevation[0]};
  }
`;
