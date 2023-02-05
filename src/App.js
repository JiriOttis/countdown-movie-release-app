import React from "react";
import Home from "./components/routes/Home"

import {Route, Routes} from "react-router-dom";

function App() {
  return (
   <>
       <Routes>
           <Route path = "/" element = {<Home />}/>
       </Routes>
   </>
  );
}

export default App;
