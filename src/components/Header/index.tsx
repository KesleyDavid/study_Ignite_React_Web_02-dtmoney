import imgLogo from '../../assets/logo.svg';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src={imgLogo} alt="dt money" />
        <button type="button">
          Nova transação
        </button>
      </S.Content>
    </S.Container>
  ) 
}