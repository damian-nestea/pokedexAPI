import "./App.css";
import Modal from "./Components/Modal/Modal";
import Router from "./Router/Router";
import GlobalState from "./contexts/GlobalState";

function App() {
  return (
    <GlobalState className="App">
      <Router />
      <Modal />
    </GlobalState>
  );
}

export default App;
