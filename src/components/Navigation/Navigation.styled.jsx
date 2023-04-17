import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    color: #e9e9e9;
    font-size: 30px;
    margin-left: 200px;

    &:last-child {
      margin-left: 50px;
    }

    &.active {
      color: orange;
    }
  `;