import styled from "styled-components";
import { colors } from "../../style";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  left: 0;
`
export const Component = styled.div`
  width: 360px;
  height: 100vh;
  background-color: ${colors.salmon};
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px 8px;
`
