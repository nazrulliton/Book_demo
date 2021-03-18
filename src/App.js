import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Books from './components/student/Books';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddBook from './components/student/AddBook';
import About from './components/Pages/About'
import NotFound from './components/Pages/NotFound'



const App = () => {
  return (


      <Router>
      <Header branding="FDM: Book Portal" />
      <Switch>
        <Route exact path="/books" component={Books}/>
        <Route exact path="/add-new" component={AddBook}/>
        <Route exact path="/about" component={About}/>
        <Route component={NotFound}/>

      </Switch>
      </Router>
  );
}

export default App;
