import { RotatingLines } from 'react-loader-spinner';
import { SpinnerWrapper } from './Spinner.styled';

export default function Spinner() {
    return (
      <SpinnerWrapper>
        <RotatingLines
          strokeColor="#6c2d2c" 
          strokeWidth="3"
          animationDuration="0.75"
          width="25"
          visible={true}
        />
      </SpinnerWrapper>
    );
}
