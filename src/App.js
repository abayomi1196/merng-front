import { Routes, Route } from "react-router-dom";
import "twin.macro";
import "styled-components/macro";

import "react-toastify/dist/ReactToastify.css";
import { Home, Login, Register } from "./pages";
import { Navbar, PrivateRoutes } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main tw='max-w-screen-xl mx-auto px-2 py-6 sm:(px-6) lg:(px-8)'>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='' element={<PrivateRoutes />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
