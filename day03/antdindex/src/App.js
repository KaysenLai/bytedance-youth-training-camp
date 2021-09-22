import { Route } from "react-router-dom";
import IndexPage from "./page/IndexPage";
function App() {
  return (
    <main className="App">
      <Route exact path="/" component={IndexPage} />
    </main>
  );
}

export default App;
