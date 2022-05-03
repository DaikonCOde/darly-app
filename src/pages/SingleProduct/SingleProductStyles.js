import styled, { keyframes } from "styled-components";

// animated

const contentImageEntry = keyframes`
    0% {
        height: 100vh ;
    }
    50% {
        height: 100vh;
    }
    100% {
        height: 55vh
    }
`;
const imageEntry = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
        width: 80%;
    }
    100% {
        width: 28s0px;
    }
`;

const contentInfoEntry = keyframes`
    0% {
        display: none;
        transform: translate(0, 250px);
        visibility: hidden;
    }
    100% {
        display: block;
        transform: translate(0, 0);
        visibility: show;
    }
`;
const contentBtns = keyframes`
    0% {
        display: none;
        transform: translate(0, 100%);
        visibility: hidden;
    }
    90% {
        display: none;
        transform: translate(0, 100%);
        visibility: hidden;
    }
    100% {
        display: block;
        transform: translate(0, 0);
        visibility: show;
    }
`;

const fade = keyframes`
  0% {
    opacity: 0;
    transform: scale(0)
  }
  100% {
    opacity: 1;
    transform: scale(1)
  }
`
const fadeInRight = keyframes`
  0% {
    transform: translateX(150%);
  }
  50% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0);
  }
`

export const HeaderSingleProduct = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
`;
export const ContentArrow = styled.span`
  color: ${(props) => props.theme.colors.gray[90]};
  font-size: 25px;
  line-height: 40px;
  text-align: start;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const ContentSingleProduct = styled.section`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${(props) => props.theme.colors.gradient};
  padding: 50px 0 0 0;
  display: block;
  @media ${(props) => props.theme.breakpoints.lg} {
    display :flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageSingleProduct = styled.div`
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 0;
  top: 0;
  animation-duration: 2s;
  animation-name: ${contentImageEntry};
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 50%;
    height: 100%;
    animation-name: ${fade};
  }
  .itemCarousel {
    display: flex;
    align-items: center;
  }
  & img {
    min-width: 280px;
    max-width: 280px;
    max-height: 280px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    animation-duration: 2s;
    animation-name: ${imageEntry};
    @media ${(props) => props.theme.breakpoints.sm} {
      max-width: 350px;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      max-width: 380px;
    }
    @media ${(props) => props.theme.breakpoints.lg} {
      animation-name: ${fade};
  }
  }
`;
export const ContentCarouselImage = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 320px;
  max-width: 400px;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 400px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 430px;
    .itemCarousel {
      max-width: 430px;
    }
  }
  .itemCarousel {
    min-width: 320px;
    max-width: 400px;
    justify-self: center;
    align-self: center;
    @media ${(props) => props.theme.breakpoints.md} {
    max-width: 430px;
  }
  }
`;

export const InfoSingleProduct = styled.div`
  height: 100%;
  background: ${(props) => props.theme.colors.gray[10]};
  border-radius: 30px 30px 0 0;
  padding: 30px 20px 100px;
  position: relative;
  z-index: 1;
  animation-duration: 2s;
  animation-name: ${contentInfoEntry};
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 40%;
    border-radius: 30px;
    animation-name: ${fadeInRight};
  } 

  & .titleProduct {
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: 20px;
    font-weight: 600;
  }

  & .priceProduct {
    color: ${(props) => props.theme.colors.gray[90]};
    font-size: 18px;
    font-weight: 700;
    display: block;
    margin: 10px 0 0 0;
    span {
      font-weight: 500;
      font-size: 14px;
      text-decoration: line-through;
      color: ${(props) => props.theme.colors.gray[40]};
      display: inline-block;
      margin: 0 5px 0 0;
    }
  }

  & .description {
    font-size: 16px;
    color: ${(props) => props.theme.colors.gray[90]};
    line-height: 26px;
    margin: 20px 0 0 0;
    .ce-paragraph {
      line-height: 20px;
    }
    .cdx-list__item {
      padding: 0;
    }
  }

  & .codex-editor__redactor {
    padding: 0 !important;
  }
`;

export const ContentButtons = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.colors.gray[10]};
  padding: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  z-index: 2;
  animation-name: ${contentBtns};
  animation-duration: 2s;
  border-radius: 0px;
  @media ${(props) => props.theme.breakpoints.lg} {
    position: absolute;
    border-radius: 30px;
    animation-name: ${fade};
  }
  .button-border {
    transition: all 0.3s linear;
    cursor: pointer;
    &:active, &:hover  {
      transform: scale(0.85);
    }

  }
`;
