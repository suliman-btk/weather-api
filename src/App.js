import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Test from "./Test";
import Card from "./Card";


const theme = createTheme({
  typography: {
    fontFamily: ["IBM"],
  },
});
function App() {
  return (
    <div className="App" style={{backgroundColor:"black"}}>
      <ThemeProvider theme={theme}>
        <Test />
        <Card/>
      </ThemeProvider>
      <h1>hi</h1>
    </div>
  );
}

export default App;
