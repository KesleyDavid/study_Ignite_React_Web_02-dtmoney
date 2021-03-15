import { createGlobalStyle } from 'styled-components'; 

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --background: #F0F2F5;
    --shape: #FFFFFF;
    --green: #33CC95;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop) (default)
  html {
    @media (max-width: 1080px) {
      // Tela até 1080px
      font-size: 93.75%; // 93.75% => 16 * 0.9375 => 15px
    }

    @media (max-width: 720px) {
      // Tela até 720px
      font-size: 87.5%; // 87.5% => 16 * 87.5 => 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    // input, textarea, button => por padrao não importam fonte do body
    // Possuem suas próprias estruturas
    font-family: 'Poppins', sans-serif; // Se houver falha no 'Poppins', carrega 'sans-serif'
    font-weight: 400; // Padrão para fonte Regular Poppins
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    // Tudo o que estiver desabilitado
    opacity: 0.6;
    cursor: not-allowed;
  }
`;