import { Routes, Route } from "react-router-dom";
import "twin.macro";
import "styled-components/macro";

import { Home, Login, Register } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main tw='max-w-7xl mx-auto px-2 sm:(px-6) lg:(px-8)'>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />

          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
