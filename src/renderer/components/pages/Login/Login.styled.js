import styled from 'styled-components';
import Card from '@mui/material/Card';

export const LoginTitle = styled.h1`
  color: var(--color-titles);
  font-size: 2rem;
`;
export const LoginBackground = styled.div`
  background-color: var(--color-secondary);
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  gap: 2rem;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-tertiary);
`;

export const CardContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    '.  .  .  .  .  .'
    '.  content  content  content  content  . '
    '.  content  content  content  content  .'
    '.  .  .  .  .  .';
`;

export const CardLayout = styled(Card)`
  grid-area: content;
  height: 100%;
`;
