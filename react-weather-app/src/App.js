
import './App.css';
import LongAndLat from './components/LongAndLat.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <LongAndLat />
    </div>
  );
}

export default App;
