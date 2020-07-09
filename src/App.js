import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ShareContainer from "./container/share/shareContainer"
import './App.css';

function App() {
  return (
    <div className=" container">
      <Router>
     <ShareContainer/>
     </Router>
    </div>
  );
}

export default App;
