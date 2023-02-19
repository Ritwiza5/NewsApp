
import './App.css';

import React,/* { Component } */{useState} from 'react'
import NavBar from './components/NavBar'
import News from './components/News';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

//export default class App extends Component {
const  App=()=> {
  
 /* state={
    progress:0
  }*/
  const [progress, setProgress] = useState(0)
  /*setProgress=(progress)=>{
    this.setState({progress:progress})
  }*/
  //render() {
    return (
      <div>
       <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height={3}
        //progress={this.state.progress}
        progress={progress}
        
      />
        <Routes>
         
          {/*<Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={10} country="in" category="entertainment"/>}/>*/}
          <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={10} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={10} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={10} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress}   key="science" pageSize={10} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={10} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={10} country="in" category="technology"/>}/>
          <Route exact path="/" element={<News setProgress={setProgress}   key="general" pageSize={10} country="in" category="general"/>}/>
        {/* to remount use unique key prop */}
        </Routes>
      </Router>
      </div>
    )
  }
//}
export default App;

