import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Flex = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  margin-top: 20px;
  overflow: hidden;
  font: inherit;

  @media screen and (width <= 900px) {
    flex-wrap: wrap;
  }
`;
export const StyledContainer = styled.div`
  width: 25%;
  min-width: 200px;
  min-height: 500px;
  background-color: #f4f5f7;
`;
export const Text = styled.div`
  margin: 10px 10px 20px;
  font-weight: 500;
  font-size: 12px;
  font-family: roboto;
  color: #808080;
  text-transform: uppercase;
`;

export const StyledItems = styled(NavLink)`
  display: flex;
  flex-direction: column;
  height: 75px;
  margin: 5px;
  padding: 10px;
  box-shadow: 0 1px 1px 0 #00000040;
  border-radius: 2px;
  background-color: white;
  cursor: pointer;
  font-size: 14px;
  font-family: roboto;
  color: black;
  text-decoration: none;

  &:hover {
    background-color: rgb(0 0 0 / 5%);
  }
`;

export const StyledItemPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  height: 75px;
  padding: 10px;
  box-shadow: 0 1px 1px 0 #00000040;
  border-radius: 2px;
  background: white;
  cursor: grab;
  font-size: 14px;
  font-family: roboto;
  transform: skewY(1deg);
  opacity: 1;
`;

export const ItemsFlex = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: auto;
`;
