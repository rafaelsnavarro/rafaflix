import React from "react";
import GitHub from "./img/github.png";
import Instagram from "./img/instagram.png";
import LinkedIn from "./img/linkedin.png";
import * as S from "./style";

export default function Footer() {
  return (
    <S.Footer>
      <S.Paragraphy>© Rafael S. Navarro 2022</S.Paragraphy>
      <S.Nav>
        <S.Figure>
          <a href="https://github.com/rafaelsnavarro">
            <S.Image src={GitHub} alt="ícone GitHub" />
          </a>
        </S.Figure>
        <S.Figure>
          <a href="https://www.instagram.com/rafaelsnavarro/">
            <S.Image src={Instagram} alt="ícone Instagram" />
          </a>
        </S.Figure>
        <S.Figure>
          <a href="https://www.linkedin.com/in/rafaelsnavarro26/">
            <S.Image src={LinkedIn} alt="ícone LinkedIn" />
          </a>
        </S.Figure>
      </S.Nav>
    </S.Footer>
  );
}
