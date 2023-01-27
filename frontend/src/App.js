import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';
import Room from './pages/Room/Room';
import Recipe from './pages/Recipe/RecipeDetail';
import Rank from './pages/Rank/TemperatureRank';
import Login from './pages/User/Login/Login';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
      {/* <p className="test">테스트</p>
      <p>테스트</p> */}
      {/* <p style={{ fontStyle: 'bold' }}>테스트</p> */}
      <Switch>
        <Route exact path="/main" component={Main} />
        <Route path="/room" component={Room} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/rank" component={Rank} />
        <Route path="/login" component={Login} />
      </Switch>
      <Nav />
      <hr />
    </div>
  );
}

export default App;
