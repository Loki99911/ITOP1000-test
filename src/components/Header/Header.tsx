// import { useMediaRules } from '../../hooks/MediaRules';
import Container from "../Container/Container";
// import SVGFromSprite from '../SVGFromSprite/SVGFromSprite';

import {
  HeaderWrapper,
  // HeaderBlock,
  // HeaderButtonWrapper,
  // LinkToContactUs,
  // MenuButton,
} from "./Header.styled";
import { IProps } from "./types";

export default function Header({ currencyUAH }: IProps) {
  return (
    <HeaderWrapper>
      <Container>
        <header>
          <h3>
            <span>USD:</span>
            {1 / currencyUAH.USD}
          </h3>
          <h3>
            <span>EUR:</span>
            {1 / currencyUAH.EUR}
          </h3>
        </header>
      </Container>
    </HeaderWrapper>
  );
}
