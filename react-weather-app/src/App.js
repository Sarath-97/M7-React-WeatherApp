
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import WeatherData from './components/WeatherData.jsx';
import MyNavBar from './components/MyNavBar.jsx';


function App() {
  return (
    <div className="App">
      <MyNavBar />
      <WeatherData />
    </div>
  );
}

export default App;
