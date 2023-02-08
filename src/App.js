import React from "react";
import Home from "./components/routes/Home"

import {Route, Routes} from "react-router-dom";
import About from "./components/routes/About";
import Upcoming from "./components/routes/Upcoming";

function App() {
    /*TODO: HTML head info*/
  return (
   <>
       <Routes>
           <Route path = "/" element = {<Home />}/>
           <Route path = "/about" element = {<About />}/>
           <Route path = "/upcoming" element = {<Upcoming />}/>
       </Routes>
   </>
  );
}

export default App;
