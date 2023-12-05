// import SVGFromSprite from '../SVGFromSprite/SVGFromSprite';
import {
  MainSectionWrapper,
  // LinkToLearnMore,
  MainText,
  MainTitle,
} from './MainSection.styled';
import mainImg from '../../../public/main.png';

export default function MainSection() {
  return (
    <>
      <MainSectionWrapper>
        <MainTitle>RENEWABLE ENERGY For any task</MainTitle>
        <div>
          <MainText>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </MainText>
        </div>
      </MainSectionWrapper>
      <img src={mainImg} alt="Wind turbine" />
    </>
  );
}
