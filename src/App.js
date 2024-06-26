import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import NewItemForm from "./NewItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // adds new drink or snack item to API
  const addMenuItem = async (item, type) => {
    let id = item.name.toLowerCase().replaceAll(" ", "-");
    item.id = id;
    await SnackOrBoozeApi.addMenuItem(item, type);
    if (type === "drink") {
      setDrinks([...drinks, item]);
    } else {
      setSnacks([...snacks, item]);
    }
  };

  // makes initial API request for data
  useEffect(() => {
    async function getSnacksAndDrinks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacksAndDrinks();
  }, []);

  // renders loading text while waiting for API
  if (isLoading) {
    return <h2>Loading &hellip;</h2>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks} drinks={""} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Item snacks={snacks} drinks={""} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu snacks={""} drinks={drinks} title="drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Item snacks={""} drinks={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/new-item/:type">
              <NewItemForm addMenuItem={addMenuItem} />
            </Route>
            <Route>
              <div className="error">
                <p className="errorMsg">
                  Hmmm. I can't seem to find what you want.
                </p>
                <p className="errorCode">Error 404</p>
              </div>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
