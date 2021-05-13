
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import ApexChart from  './components/ApexChart/ApexChart';
import Chartjs from './components/Chartjs/Chartjs';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UseForm from './components/UserForm-UseEffect-Dependencies/UseForm';
import Animate from './components/Animate-hover-css/AnimateCss'


function App() {
  return (
    <div className="main-container">
      <Navbar/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/apexjs" component={ApexChart}/>
        <Route path="/chartjs" component={Chartjs}/>
        <Route path="/animate" component={Animate}/>
        <Route path="/useform" component={UseForm}/>
        <Redirect to="/home"/>
      </Switch>
    </div>
  );
}

export default App;
