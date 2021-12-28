import { NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";

export const AppLink = styled(NavLink)`
  ${tw`
    text-gray-300 px-3 py-2 rounded-md text-sm font-medium
    transition-all
    hover:(bg-gray-700 text-gray-200)
  `}

  &.active {
    ${tw`bg-gray-900 text-indigo-400`}
  }
`;
