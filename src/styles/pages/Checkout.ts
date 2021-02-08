import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.colors.backgroundSecondary};
  position: relative;

  h1 {
    font-size: 70px;
    color: ${props => props.theme.colors.textSecondary};
  }

  h2 {
    font-size: 54px;
    color: ${props => props.theme.colors.textThird};
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  h3 {
    color: ${props => props.theme.colors.textFourth};
    font-size: 35px;
    font-weight: 400;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .message {
      width: 80%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .goHome {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      position: absolute;
      bottom: 10%;
      cursor: pointer;
      z-index: 3;
      svg {
        color: ${props => props.theme.colors.background};
      }
    }
  }
`
