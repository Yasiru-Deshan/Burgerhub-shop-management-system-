import './App.css'; 
import React,{ useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/HomePage';
import SigninPage from './pages/SignInPage/signin';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AddItem from './pages/AddItem';
import Menu from './pages/Menu';

const App = ()=> {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

  
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>    
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SigninPage} exact/>
        <Route path='/add' component={AddItem} exact/>
        <Route path='/menu' component={Menu} exact/>

       
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
