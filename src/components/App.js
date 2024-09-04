import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Table from './table/Table';
import Auth from './auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path='/data' element={<Table />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
