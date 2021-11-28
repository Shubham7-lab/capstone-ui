import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Account from "./Components/Account"
import FundTransfer from "./Components/FundTransfer"

import Navbar from './Navbar';
import Login from './Components/Login';
import MiniStatement from './Components/MiniStatement';
import Layout from './Components/Layout';
import { Logout } from './Logout';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route path="/account" exact>
            <Layout>
              <Navbar />
              <Account />
            </Layout>
          </Route>

          <Route path="/fundtransfer" exact>
            <Layout>
              <Navbar />
              <FundTransfer />
            </Layout>

          </Route>
          <Route path="/ministatement" exact>
            <Layout>
              <Navbar />
              <MiniStatement />
            </Layout>
          </Route>

          <Route path="/" exact>
            <Login />
          </Route>

          <Route path="/logout" exact>
            <Logout />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
