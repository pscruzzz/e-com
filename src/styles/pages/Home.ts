import styled, { css } from 'styled-components'

import { shade } from 'polished'

interface IProductBoard {
  tranformState: number
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .wrapper {
    width: 90%;
    max-width: 1440px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    footer {
      width: 100%;
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;

      .bold {
        margin-right: 10px;
      }

      .forever {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        p {
          color: ${shade(0.3, '#BEE6E6')};
          transition: all ease 0.5s;
          :hover {
            color: ${shade(1, '#BEE6E6')};
          }
        }
      }

      .developed {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
        font-size: 2rem;
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

      @media (max-width: 826px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
    font-size: 6rem;
    color: ${props => props.theme.colors.textPrimary};
    /* margin-top: 30px; */
    position: relative;
  }

  h2 {
    font-size: 5rem;
    color: ${props => props.theme.colors.textPrimary};
    font-weight: 400;
  }

  h3 {
    font-size: 3rem;
    font-weight: 400;
  }

  p {
    font-size: 2rem;
    font-weight: 400;
  }
`

export const Banner = styled.section`
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  /* div + div {
    margin: 20px;
  } */

  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    white-space: nowrap;
    max-width: 100%;
  }

  .mainText + .mainText {
    padding-right: 20%;
  }

  .mainText {
    width: fit-content;
    padding-left: 5%;
    padding-right: 5%;
    position: relative;

    ::after {
      display: flex;
      content: '';
      width: 100%;
      /* max-width: 150%;
      min-width: 120%; */
      height: 2rem;
      background: #ffe4d4;
      border-radius: 15px;
      /* margin-left: -15%;*/
      margin-top: -2rem;
      position: absolute;
      left: 0;
      z-index: -1;
    }

    & + ::after {
      position: relative;
      display: flex;
      content: '';
      /* max-width: 80rem;
      min-width: 50rem; */
      height: 2rem;
      background: #ffe4d4;
      margin: 0;
      margin-top: -2rem;
      width: 120%;
    }
  }

  @media (max-width: 950px) {
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      max-width: 100%;
    }
    .mainText {
      width: fit-content;
      padding-left: 5%;
      padding-right: 5%;

      ::after {
        display: flex;
        content: '';
        width: 100%;
        /* max-width: 150%;
        min-width: 120%; */
        height: 2rem;
        background: #ffe4d4;
        border-radius: 15px;
        /* margin-left: -15%;*/
        margin-top: -2rem;
      }

      & + ::after {
        display: flex;
        content: '';
        /* max-width: 80rem;
      min-width: 50rem; */
        height: 2rem;
        background: #ffe4d4;
        margin: 0;
        margin-top: -2rem;
      }
    }
    .mainText + .mainText {
      padding-right: 5%;
    }
  }

  @media (max-width: 371px) {
    .mainText {
      font-size: 5rem;
    }
  }
`

export const ProductSlider = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .mainSubtitle {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: center;

    text-align: center;

    white-space: nowrap;

    :after {
      display: flex;
      content: '';
      max-width: 85%;
      min-width: 85%;
      height: 15px;
      background: #fed385;
      border-radius: 15px;
      margin-left: 15%;
      margin-top: -1.5rem;
      z-index: -1;
    }
  }

  @media (max-width: 594px) {
    .mainSubtitle {
      display: none;
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

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  > div {
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
    justify-content: center;
    position: absolute;
    bottom: 1%;
    right: 0%;

    p {
      width: 250px;
      color: ${props => props.theme.colors.background};
      font-size: 2rem;
      font-weight: 400;
      font-family: Quicksand;
      align-self: center;
      text-align: start;
      white-space: nowrap;
      width: 100%;
    }

    @media (max-width: 628px) {
      bottom: -20%;
      right: 0%;
      p {
        color: ${props => props.theme.colors.backgroundSecondary};
      }
      svg {
        color: ${props => props.theme.colors.backgroundSecondary} !important;
      }
    }
  }

  .linkClassCollection {
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -10%;
    right: 0%;

    p {
      width: 250px;
      color: ${props => props.theme.colors.backgroundSecondary};
      font-size: 2rem;
      font-weight: 400;
      font-family: Quicksand;
      align-self: center;
      text-align: start;
      white-space: nowrap;
      width: 100%;
    }
  }

  .productBoard {
    height: 400px;
    background: ${props => props.theme.colors.backgroundSecondary};
    border-radius: 15px;
    margin-left: 10%;
    margin-top: 1%;
    margin-bottom: 100px;
    width: 90%;

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

    @media (max-width: 790px) {
      margin-left: 5%;
      margin-right: 5%;

      .productProps {
        margin-left: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .imageDiv {
        display: contents;
        img {
          display: block;
          width: 50%;
          height: 400px;
          object-fit: cover;
          object-position: top;
          border-radius: 15px 0px 0px 15px;
        }
      }
    }
  }
`

export const StyledDiv = styled.div`
  background: ${props => props.theme.colors.textFourth};
  font-family: Quicksand;
  border: none;
  font-size: 2rem;
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
