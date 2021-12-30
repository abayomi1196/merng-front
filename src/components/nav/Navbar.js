import "twin.macro";
import "styled-components/macro";
import { useContext } from "react";

import { AppLink } from "./Navbar.styled";
import { LoggedInContext } from "../../context/LoggedInContext";

function Navbar() {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem("merng-token");
  }

  return (
    <nav tw='bg-gray-800'>
      <div tw='max-w-7xl mx-auto px-2 sm:(px-6) lg:(px-8)'>
        <div tw='relative flex items-center justify-between h-16'>
          <div tw='flex-1 flex items-center justify-center sm:(items-stretch justify-between)'>
            <div tw='w-full flex space-x-4 justify-center sm:(justify-between)'>
              <AppLink to='/'>home</AppLink>

              <div tw='flex space-x-1 lg:(space-x-6)'>
                {!loggedIn ? (
                  <>
                    {" "}
                    <AppLink to='/login'>login</AppLink>
                    <AppLink to='/register'>register</AppLink>
                  </>
                ) : (
                  <AppLink to='/login' onClick={handleLogout}>
                    logout
                  </AppLink>
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
