import styled from 'styled-components';

export const Container = styled.div`
  display: grid; // 3 div mesmo tamanho
  /* grid-template-columns: 1fr 1fr 1fr; // 3 Colunas, tamanho flexivel mas igual */
  grid-template-columns: repeat(3, 1fr); // 3 Colunas, tamanho flexivel mas igual
  gap: 2rem; // Espaçamento entre cada grid
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block; // por padrão vem com display inline, e margin-top não funciona
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #FFFFFF;
    }
  }

`;
