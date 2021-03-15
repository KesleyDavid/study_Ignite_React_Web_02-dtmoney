import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto; // Sempre centralizado

  padding: 2rem 1rem 12rem; // 2rem cima / 1rem lateral / 12rem vertical
  display: flex;
  align-items: center; // Logo e texto alinhado verticalmente ao centro
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFFFFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem; // 4px desktop
    height: 3rem;

    // Efeito de Transição
    transition: filter 0.2s;
    
    &:hover {
      // Diferentes filtros no css
      filter: brightness(0.9);
    }
  }

`;
