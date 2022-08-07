import styled from 'styled-components'

const Wrapper = styled.div`
  font-family: 'Spline Sans', sans-serif;
  font-size: 16px;
  color: white;
  margin: 0 auto;
  position: relative;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }

  @media (max-width: 1024px) {
    transform: scale(0.98) translateX(200px);
  }
  @media (max-width: 800px) {
    transform: scale(0.7) translateX(680px);
  }
  @media (max-width: 600px) {
    transform: scale(0.5) translateX(-100px);
    right: auto;
    left: 50%;
    margin-left: -608px;
  }
  @media (max-width: 375px) {
    transform: scale(0.45) translateX(-50px);
  }
`

export default Wrapper
