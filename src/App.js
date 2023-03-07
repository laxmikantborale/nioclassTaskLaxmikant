import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <h1>Mathemtics Class</h1>
        <Routes>
          <Route path='/' element={<Question1 />} />
          <Route path='/question2' element={<Question2 />} />
          <Route path='/question3' element={<Question3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


// Link => https://jade-marzipan-9924ae.netlify.app
