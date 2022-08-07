import Spline from '@splinetool/react-spline';
import Wrapper from './styles/Wrapper';

export default function App() {
  return (
    <Wrapper>
      <Spline className='spline' scene="https://prod.spline.design/p9U9HTopRH85UbuS/scene.splinecode" />
    </Wrapper>
  );
}
