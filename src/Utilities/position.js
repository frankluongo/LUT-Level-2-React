export const position = ({
  pos = 'absolute',
  x = 'left',
  xVal = 0,
  y = 'top',
  yVal = 0
}) => `
  position: ${pos};
  ${y}: ${yVal};
  ${x}: ${xVal};
`;
