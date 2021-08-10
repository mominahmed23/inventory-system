/** @format */

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "antd-css-utilities/utility.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/storeConfig/store";
import Nav from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import ChartVisuals from "./views/ChartVisuals";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/visuals">
            <ChartVisuals />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
