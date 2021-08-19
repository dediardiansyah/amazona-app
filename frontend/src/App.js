import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div className="">
            <Link to="/" className="brand">
              Amazona
            </Link>
          </div>
          <div className="">
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Switch>
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact component={HomeScreen} />
          </Switch>
        </main>
        <footer className="row center">All Right Reserved</footer>
      </div>
    </Router>
  );
}

export default App;
