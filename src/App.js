import AddBook from './AddBook';
import ListBooks from './ListBooks';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/add" element={<AddBook />} />
        <Route path="/books" element={<ListBooks />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
