import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PrivateHome from "./Pages/PrivateHome/PrivateHome";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/loggedHome" exact component={PrivateHome} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
