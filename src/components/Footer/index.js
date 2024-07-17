import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante o
        {' '}
        <a href="https://www.alura.com.br/">
          OracleNextEducation Alura LATAM 2024
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
