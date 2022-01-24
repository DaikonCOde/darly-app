import styled from "styled-components";

export const ContentNavAdminMenu = styled.div`
  padding: 30px 20px;
  width: 200px;
  color: #fff;
  background: ${ props => props.theme.colors.gray[20] };
  height: 100%;
  min-height: 100vh;
`

export const Brand = styled.h2`
  color: ${ props => props.theme.colors.gray[100]};
  font-size:25px;
  font-weight: 600;

`

export const ContentNavItems = styled.nav`
  margin: 60px 0 0;
  & .navItem {
    color: ${ props => props.theme.colors.gray[90]};
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0;
    background: transparent;
    border-radius: 10px;
    transition: all 0.3s linear;
    padding: 14px 16px;
    a {
      span {
        font-size: 20px;
        display: inline-block;
        margin: 0 5px 0 0;
        vertical-align: middle;
      }
    }
    &:hover {
      background: ${ props => props.theme.colors.gradient };
    }
  }
`