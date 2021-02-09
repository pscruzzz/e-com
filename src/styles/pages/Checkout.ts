import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.colors.backgroundSecondary};

  h1 {
    font-size: 70px;
    color: ${props => props.theme.colors.background};
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
    background: ${props => props.theme.colors.backgroundSecondary};

    .pix {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      border: 1px;
      border-color: ${props => props.theme.colors.textSecondary};
      border-style: solid;
      border-radius: 15px;
      padding: 20px 30px;

      margin: 20px 0px 40px 0px;

      > h3 {
        color: ${props => props.theme.colors.textSecondary};
        text-align: center;
      }
    }

    .message {
      width: 80%;
      height: fit-content;
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
      flex-direction: column;
      cursor: pointer;
      z-index: 3;
      > h3 {
        color: ${props => props.theme.colors.textThird};
        margin-right: 10px;
      }
      svg {
        color: ${props => props.theme.colors.textThird};
      }
    }
  }
`
