import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      // Seletor placeholder
      color: var(--text-body);
    }

    & + input {
      // Todo input que tiver um input antes dele
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    // Button do tipo submit
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    // Efeito de Transição
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ContainerTransactionType = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  // activeColor: string;
  activeColor: 'green' | 'red'; // Apenas as duas cores
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
}
// Utilizando arrow functions com props, o JS não encherga as cores CSS
// Por isso foi criado a variavel

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${({isActive,activeColor}) => isActive 
    // ? transparentize(colors[activeColor]) // Não pode todas cores, apenas green ou red, necessário alterar interface
    ? transparentize(0.9, colors[activeColor]) // 90 % transparente
    : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')}
    // Escurescer a borda em 10%
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block; //permite margin
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`