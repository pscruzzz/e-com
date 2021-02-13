import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

  .wrapper {
    max-width: 1440px;
    padding: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
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
`

export const ProductBoard = styled.div`
  margin-top: 40px;
  position: relative;
  .linkClass {
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    bottom: 1%;
    right: 4%;

    p {
      color: ${props => props.theme.colors.background};
      font-size: 2rem;
      font-weight: 400;
      font-family: Quicksand;
      align-self: center;
    }
  }
  width: 90vw;
  height: 60vh;
  max-width: 1440px;
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  .imageDiv {
    display: contents;
    img {
      display: block;
      width: 35%;
      height: 60vh;
      object-fit: cover;
      object-position: top;
      border-radius: 15px 0px 0px 15px;
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
export const ProductProps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  margin-left: 5%;
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
`
