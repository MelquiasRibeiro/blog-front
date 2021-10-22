import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./pages/home"
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
