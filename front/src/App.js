import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/signin" component={Home} />
          <Route path="/signup" component={SignUp} />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
