import styled from 'styled-components';

export const CenterFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: radial-gradient(
    ${({ theme }) => theme.colors.gradient.radialGradient[0]},
    ${({ theme }) => theme.colors.gradient.radialGradient[1]}
  );
`;
