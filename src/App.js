import './App.css';
import {useEffect} from "react"
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './components/Providers/StateProvider';

function App() {
  // eslint-disable-next-line
  const [{},dispatch] = useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      dispatch({type:'SET_USER',user:user})
    })
  },[])
  return (
    <Router>
       <div className="app">
      <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
