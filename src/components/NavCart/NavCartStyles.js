import styled from "styled-components";

export const ContentNavCar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${ props => props.theme.colors.gray[10]  };
    z-index: 10;
    transition: all .5s linear;
    transform: ${ props => props.isOpen ? 'translateX(0%)' : 'translateX(100%)'  }; 
`

export const HeaderNavCar = styled.div`
    width: 100%;
    display: flex;
    padding: 15px 20px;
    color: ${ props => props.theme.colors.gray[90] };
    & .closeArrow {
        display: block;
        width: 30px;
        height: 30px;
        font-size: 25px;
        font-weight: 600;
        position: relative;
        &::before {
            position: absolute;
            content: '';
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }

    & .titleCar {
        display: block;
        text-align: center;
        width: 100%;
        font-size: 20px;
        font-weight: 600;s
    }
`

export const BodyNavCar = styled.div`
    padding: 0 10px;
`
export const FooterNavCar = styled.div`
    padding: 15px 20px;
    background: ${ props => props.theme.colors.gray[20] };
    display: flex;
    position: fixed;
    justify-content: space-around;
    bottom: 0;
    left: 0;
    right: 0;
    color: ${ props => props.theme.colors.gray[100] };
    font-weight: 600;

    & .totalCount {
        font-size: 24px;
        line-height: 35px;
        & span {
            display: block;
            font-size: 16px;
            line-height: 16px;
            font-weight: 500;
            color: ${ props => props.theme.colors.gray[80] };
        }
    }

    & .goPayment {
        padding: 16px 50px;
        background: ${ props => props.theme.colors.gradient };
        border-radius: 10px;
        display: block;
        text-transform: uppercase;
        transition: all .3s linear;
        &:active {
            transform: scale(0.85);
        }
    }
`