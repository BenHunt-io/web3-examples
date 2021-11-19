import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  Routes,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
import Voting from './pages/Voting/Voting';
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => (<div><Link to="/voting"> voting example </Link></div>);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/voting" element={<Voting/>}/>
        <Route path="/faucet"/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
