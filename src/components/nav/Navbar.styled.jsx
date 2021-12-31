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

export const UserDetails = styled.p`
  ${tw`text-green-400 text-sm mr-5 px-5 py-2 bg-gray-700 user-select[none] rounded-md shadow-2xl`}
`;
