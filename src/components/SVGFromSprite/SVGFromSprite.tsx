import Sprite from '../../assets/symbol-defs.svg';
import { ISvgProps } from './types';

export default function SVGFromSprite({ name, width, height, color }: ISvgProps) {
  return (
    <svg fill={color} stroke={color} width={width} height={height}>
      <use href={`${Sprite}#${name}`} />
    </svg>
  );
}
