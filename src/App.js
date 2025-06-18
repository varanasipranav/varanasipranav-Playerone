
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Form from './Form';
import Landing from './Landing';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path="/register" element={<Form/>} />
 
      </Routes>
  </Router>
    </>
  );
}

export default App;
