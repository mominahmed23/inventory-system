import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "antd-css-utilities/utility.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/storeConfig/store";
import Nav from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataFromFaker from "./components/DataFromFaker";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/visuals">
            <DataFromFaker />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
