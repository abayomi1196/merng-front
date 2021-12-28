import { NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";

export const AppLink = styled(NavLink)`
  ${tw`text-gray-300 px-3 py-2 rounded-md text-sm font-medium`}

  &.active {
    ${tw`bg-gray-900 text-white`}
  }
`;
