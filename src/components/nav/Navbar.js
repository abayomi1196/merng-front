import "twin.macro";
import "styled-components/macro";

import { AppLink } from "./Navbar.styled";

function Navbar() {
  return (
    <nav tw='bg-gray-800'>
      <div tw='max-w-7xl mx-auto px-2 sm:(px-6) lg:(px-8)'>
        <div tw='relative flex items-center justify-between h-16'>
          <div tw='flex-1 flex items-center justify-center sm:(items-stretch justify-start)'>
            <div tw='flex space-x-6'>
              <AppLink to='/' aria-current='page'>
                Home
              </AppLink>

              <AppLink to='/login'>Login</AppLink>

              <AppLink to='/register'>Register</AppLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
