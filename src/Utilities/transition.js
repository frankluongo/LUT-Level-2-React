export default ({property = 'all', length = '0.3s', ease = 'ease-in-out'}) => `
  transition: ${property} ${length} ${ease};
`;
