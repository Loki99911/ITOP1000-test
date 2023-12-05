import { ContainerEl } from './Container.styled';
import { ContainerProps } from './types';

export default function Container({ children }: ContainerProps) {
  return <ContainerEl>{children}</ContainerEl>;
}
