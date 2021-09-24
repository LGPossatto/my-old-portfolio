import { BrowserRouter, Switch, Route } from "react-router-dom";
//import Navbar from "./components/navbar/Navbar.component";

import Home from "./pages/home/Home.page";
import More from "./pages/more/More.page";
import Project from "./pages/project/Project.page";
import NotFound from "./pages/not-found/NotFound.page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/more" component={More}></Route>
        <Route exact path="/projects/:id" component={Project}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
