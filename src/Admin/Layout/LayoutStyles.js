import styled from "styled-components";

export const ContentDashboardLayout =  styled.div`
  background: ${ props => props.theme.colors.gray[10] };
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  main {
    padding: 30px;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0  0 0 220px;
  }
`