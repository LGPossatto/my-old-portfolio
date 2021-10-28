import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProjectsProvider from "./context/ProjectsProvider.context";

import Navbar from "./components/navbar/Navbar.component";
import Footer from "./components/footer/Footer.component";

import Home from "./pages/home/Home.page";
import More from "./pages/more/More.page";
import Project from "./pages/project/Project.page";
import NotFound from "./pages/not-found/NotFound.page";

const App = () => {
  return (
    <ProjectsProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/more" component={More}></Route>
          <Route exact path="/projects/:id" component={Project}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </ProjectsProvider>
  );
};

export default App;
