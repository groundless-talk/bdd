import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home/index';

import Olympic from './containers/Olympic/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={ <Home /> } path="/home" />
          <Route element={ <Olympic /> } path="/olympic" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
