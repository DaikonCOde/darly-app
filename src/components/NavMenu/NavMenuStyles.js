import styled from "styled-components";

export const ContentNavMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${ props => props.theme.colors.gray[10]  };
    z-index: 10;
    transition: all .5s linear;
    padding: 15px 20px;
    transform: ${ props => props.isOpen ? 'translateX(-0%)' : 'translateX(-100%)'  }; 

    & .contentIcon {
        color: ${ props => props.theme.colors.gray[100] };
        margin: 0 0 0 auto;
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

    & .listMenu {
        margin: 30px 0 0;
        .item {
            color: ${ props => props.theme.colors.gray[100] };
            font-size: 16px;
            margin: 15px 0;
            .signOut {
                font-size: 16px;
                text-transform: none;
                padding: 14px 16px;
            }
        }
    }

`