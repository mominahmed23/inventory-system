import { Provider } from "react-redux";
import store from "./redux/storeConfig/store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Home from "./components/Home";

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
        <Home />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
