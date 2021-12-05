import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Edvora from './pages/Edvora';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Edvora />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
