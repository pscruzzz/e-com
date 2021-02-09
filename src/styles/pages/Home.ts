import styled, { keyframes, css } from 'styled-components'

interface IProductBoard {
  tranformState: number
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .wrapper {
    max-width: 1440px;
    padding: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    footer {
      width: 100%;
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .bold {
        margin-right: 10px;
      }

      .developed {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
        font-size: 24px;
        font-family: Quicksand;
        font-weight: regular;
      }

      .buildTime {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
    }
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    .logo {
      color: ${props => props.theme.colors.textPrimary};
      margin: 10px;
      font-family: Audiowide;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
    }
  }

  h1 {
    font-size: 70px;
    color: ${props => props.theme.colors.textPrimary};
    /* margin-top: 30px; */
    position: relative;
  }

  h2 {
    font-size: 54px;
    color: ${props => props.theme.colors.textPrimary};
    font-weight: 400;
  }

  h3 {
    font-size: 35px;
    font-weight: 400;
  }

  p {
    font-size: 24px;
    font-weight: 400;
  }

  /* #BallonsBackground {
    color: ${props =>
    props.theme.colors.textFourth};
    background: ${props =>
    props.theme.colors.textFourth};
  } */
`

export const Banner = styled.section`
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > div:first-child {
    padding-left: 100px;
  }

  div + div {
    margin: 20px;
  }

  .mainText {
    white-space: nowrap;

    :after {
      display: flex;
      content: '';
      max-width: 35rem;
      min-width: 30rem;
      height: 20px;
      background: #ffe4d4;
      border-radius: 15px;
      margin-left: -100px;
      margin-top: -20px;
    }

    & + :after {
      display: flex;
      content: '';
      max-width: 80rem;
      min-width: 50rem;
      height: 20px;
      background: #ffe4d4;
      margin: 0;
      margin-top: -20px;
    }
  }
`

export const ProductSlider = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .mainSubtitle {
    margin-left: 100px;
    :after {
      display: flex;
      content: '';
      max-width: 50rem;
      min-width: 45rem;
      height: 15px;
      background: #fed385;
      border-radius: 15px;
      margin-left: 100px;
      margin-top: -15px;
    }
  }
`

export const CollectionTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
  height: 80px;
  position: relative;
  width: 50%;

  > div {
    cursor: pointer;
  }
`

export const ProductBoardContainer = styled.div`
  display: flexbox;
  width: 90vw;
  max-width: 1440px;
  overflow: hidden;

  .linkClass {
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    bottom: 1%;
    right: 0%;

    p {
      color: ${props => props.theme.colors.background};
      font-size: 24px;
      font-weight: 400;
      font-family: Quicksand;
      align-self: center;
    }
  }

  .productBoard {
    height: 400px;
    background: ${props => props.theme.colors.backgroundSecondary};
    border-radius: 15px;
    margin-left: 10%;
    margin-top: 1%;
    margin-bottom: 100px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    position: relative;

    .imageDiv {
      position: absolute;
      top: 10%;
      left: -11%;
      z-index: 2;
      img {
        width: 20vw;
        height: 450px;
        max-width: 300px;
        object-fit: cover;
        object-position: top;
        border-radius: 15px;
      }
    }

    .productProps {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 50%;
      margin-left: 20%;
      z-index: 3;

      .skuTitle {
        color: ${props => props.theme.colors.textFourth};
      }

      .skuDescription {
        color: ${props => props.theme.colors.textSecondary};
      }

      .skuPrice {
        font-family: Audiowide;
        color: ${props => props.theme.colors.textFourth};
      }
    }
  }
`

export const StyledDiv = styled.div`
  background: ${props => props.theme.colors.textFourth};
  font-family: Quicksand;
  border: none;
  font-size: 24px;
  padding: 10px;
  border-radius: 15px 10px;
  transition: background-color ease 0.5s;
  cursor: pointer;

  &:hover {
    background: #ffe4d4;
  }
`
interface TitleAnimatedProps {
  initialPosition: {
    fontSize: string
    color: string
    whiteSpace: string
    marginBottom: string
    fontWeight: string
    width: string
    position: string
    inset: string
    transform: string
    textAlign: string
  }
}

export const TitleAnimated = styled.div<TitleAnimatedProps>`
  ${props => css`
    font-size: ${props.initialPosition.fontSize};
    color: ${props.initialPosition.color};
    white-space: ${props.initialPosition.whiteSpace};
    margin-bottom: ${props.initialPosition.marginBottom};
    font-weight: ${props.initialPosition.fontWeight};
    width: ${props.initialPosition.width};
    position: ${props.initialPosition.position};
    inset: ${props.initialPosition.inset};
    transform: ${props.initialPosition.transform};
    text-align: ${props.initialPosition.textAlign};
    transition: all 0.5s ease;
  `}
`
