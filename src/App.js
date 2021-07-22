import './App.css';
import React from "react";
import ProtectedRouter from './component/ProtectedRouter'
import { BrowserRouter as Router, Switch , Route  } from "react-router-dom";
import { ThemeProvider , createMuiTheme } from '@material-ui/core/styles';
import Home from "./component/Home";
import Dashboard from "./component/Dashboard";
import Privacy from "./component/Privacy";
import Ds from "./component/Ds";
import Webdevelopment from "./component/Webdevelopment";
import Freelancing from "./component/Freelancing";
import Programming from "./component/Programming";
import Ui from "./component/Ui";
import Cyber from "./component/Cyber";
import Cloud from "./component/Cloud";
import Datascience from "./component/Datascience";
import Machinelearning from "./component/Machinelearning";
import Rules from "./component/Rules";
import Appdev from "./component/Appdev";

const theme = createMuiTheme ({
  palette : {
      type : 'dark',
      text : {
        white : '#fff'
      }
  }
 })

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <ProtectedRouter path="/dashboard" exact component={Dashboard}></ProtectedRouter>
            <Route path="/privacy" exact component={Privacy}></Route>
            <ProtectedRouter path="/rules" exact component={Rules}></ProtectedRouter>
            <ProtectedRouter path="/freelancing" exact component={Freelancing}></ProtectedRouter>
            <ProtectedRouter path="/web-development" exact component={Webdevelopment}></ProtectedRouter>
            <ProtectedRouter path="/programming" exact component={Programming}></ProtectedRouter>
            <ProtectedRouter path="/data-structure" exact component={Ds}></ProtectedRouter>
            <ProtectedRouter path="/data-science" exact component={Datascience}></ProtectedRouter>
            <ProtectedRouter path="/android-development" exact component={Appdev}></ProtectedRouter>
            <ProtectedRouter path="/cloud-computing" exact component={Cloud}></ProtectedRouter>
            <ProtectedRouter path="/machine-learning" exact component={Machinelearning}></ProtectedRouter>
            <ProtectedRouter path="/cyber-security" exact component={Cyber}></ProtectedRouter>
            <ProtectedRouter path="/ui-ux-design" exact component={Ui}></ProtectedRouter>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
