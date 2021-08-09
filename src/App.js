import { Provider } from "react-redux";
import store from "./redux/storeConfig/store";
import Nav from "./components/NavBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataFromFaker from "./components/DataFromFaker";

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "#cecece",
  //   },
  //   secondary: {
  //     main:"#1890ff"},
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
