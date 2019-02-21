//Dependecies
import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

//Components
import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";
import MainNav from "./components/Navigation/MainNavigation";

//Context
import AuthContext from "./context/auth-context";

//Style
import "./App.css";

class App extends Component {
  //State
  state = {
    token: null,
    userId: null
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({
      token: token,
      userId: userId,
      tokenExpiration: tokenExpiration
    });
  };
  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNav />
            <main className="main-content">
              <Switch>
                <Redirect from="/" to="/events" exact />
                {this.state.token && <Redirect from="/auth" to="/events" exact />}
                {!this.state.token && ( <Route path="/auth" component={AuthPage} /> )}
                <Route path="/events" component={EventsPage} />
                {this.state.token && ( <Route path="/bookings" component={BookingsPage} /> )}
                {!this.state.token && <Redirect to="/auth" exact />}
              </Switch>
            </main>
          </AuthContext.Provider>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
