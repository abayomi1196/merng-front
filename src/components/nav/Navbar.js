import "twin.macro";
import "styled-components/macro";
import { useContext } from "react";

import { AppLink, UserDetails } from "./Navbar.styled";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav tw='bg-gray-800'>
      <div tw='max-w-7xl mx-auto px-2 sm:(px-6) lg:(px-8)'>
        <div tw='relative flex items-center justify-between h-16'>
          <div tw='flex-1 flex items-center justify-center sm:(items-stretch justify-between)'>
            <div tw='w-full flex space-x-4 justify-between sm:(justify-between)'>
              <AppLink to='/'>home</AppLink>

              <div tw='flex space-x-1 lg:(space-x-6)'>
                {!user ? (
                  <>
                    {" "}
                    <AppLink to='/login'>login</AppLink>
                    <AppLink to='/register'>register</AppLink>
                  </>
                ) : (
                  <div tw='flex items-center'>
                    <UserDetails>{user.username}</UserDetails>
                    <AppLink to='/login' onClick={() => logout()}>
                      logout
                    </AppLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
