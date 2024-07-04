import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';//Navbar ,we have to write it after import becaue functional component
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import "./index.scss";

function App() {
 

  return (
      <>
        <Navbar/>
        <Header title="POPULAR TOUR PLACES"/>
        <Main/>
      </>
  )
}

export default App
