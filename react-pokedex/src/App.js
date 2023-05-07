import "./App.css";
import Router from "./Router/Router";
import GlobalState from "./contexts/GlobalState";

function App() {
  return (
    <GlobalState className="App">
      <Router />
    </GlobalState>
  );
}

export default App;
