
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { useState} from 'react';
import {
  BrowserRouter,

  Route,
  Routes,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=>{
  const apiKey = process.env.REACT_NEWS_APP_API;
  const [prgrss,setPrgrss] = useState(0);

  const setProgress = (progress)=>{
    setPrgrss(progress);
  }
  
    return (
      <>
        <BrowserRouter>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={prgrss}
            
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="" pageSize={10} country={'in'} category='general' />} />

            <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={10} country={'in'} category='business' />} />
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={10} country={'in'} category='entertainment' />} />
            <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={10} country={'in'} category='sports' />} />
            <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={10} country={'in'} category='health' />} />
            <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={10} country={'in'} category='science' />} />
            <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="" pageSize={10} country={'in'} category='technology' />} />
          </Routes>

        </BrowserRouter>

      </>
    )
  
}

export default App

