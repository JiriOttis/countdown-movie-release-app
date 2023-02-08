import React from "react";
import Home from "./components/routes/Home"

import {Route, Routes} from "react-router-dom";
import About from "./components/routes/About";

function App() {
  return (
   <>
       <Routes>
           <Route path = "/" element = {<Home />}/>
           <Route path = "/about" element = {<About />}/>
       </Routes>
   </>
  );
}

export default App;
