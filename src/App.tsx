import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainNavbar from "./Pages/MainNavbar";
import MainGroups from "./Pages/Groups/MainGroups";
import MainPersons from "./Pages/Persons/MainPersons";
import { PersonProvider } from "./context/PersonsContext/PersonContext";

const App = () => {
  return (
    <PersonProvider>
      <Router>
        <div className="App">
          <div className="title">
            <MainNavbar />
          </div>
        </div>
        <Switch>
          <Route exact path="/groups">
            <MainGroups />
          </Route>
          <Route exact path="/persons">
            <MainPersons />
          </Route>
        </Switch>
      </Router>
    </PersonProvider>
  );
};

export default App;
