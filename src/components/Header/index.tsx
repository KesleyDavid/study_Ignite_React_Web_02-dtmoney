import { useState } from 'react';

import Modal from 'react-modal';

import imgLogo from '../../assets/logo.svg';

import * as S from './styles';

interface HeaderProps {
  onOpenModalNewTransaction: () => void; // Função / Sem Parametro / Sem Retorno
}

export function Header({ onOpenModalNewTransaction }: HeaderProps) {
  
  return (
    <S.Container>
      <S.Content>
        <img src={imgLogo} alt="dt money" />
        <button type="button" onClick={onOpenModalNewTransaction}>
          Nova transação
        </button>

        
      </S.Content>
    </S.Container>
  ) 
}