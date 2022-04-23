import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import ScrollToTop from './components/ScrollToTopAuto';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GoTop from './components/GoTopOnclick';

import LoadingBar from 'react-top-loading-bar';

const App = () =>{
  const[progress,setProgress] = useState(0);
  const pageSize = 8;
  const apikey = process.env.REACT_APP_MY_KEY;
    return (
      <Router>
         <ScrollToTop />
        <div className="">
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <>
              <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country={"in"} category={"general"} />}></Route>
              <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country={"in"} category={"business"} />}></Route>
              <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country={"in"} category={"entertainment"} />}></Route>
              <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country={"in"} category={"health"} />}></Route>
              <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country={"in"} category={"science"} />}></Route>
              <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country={"in"} category={"sports"} />}></Route>
              <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country={"in"} category={"technology"} />}></Route>
            </>
          </Routes>
          <Footer />
        </div>
        <GoTop />
      </Router>
    )
}
export default App;

