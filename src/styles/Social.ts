import styled from 'styled-components'

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08B6F9 0%,
      #6C56EF 33.57%,
      #1306DD 65.86%,
      #AA0EB2 100%);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

export default Social
