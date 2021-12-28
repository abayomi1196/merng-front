import { Routes, Route } from "react-router-dom";

import { Home, Login, Register } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
