import Container from '../Container/Container';
import { MainWrapper } from './Main.styled';
import { MainProps } from './types';
export default function Main({ children }: MainProps) {
  return (
    <MainWrapper>
      <Container>{children}</Container>
    </MainWrapper>
  );
}
