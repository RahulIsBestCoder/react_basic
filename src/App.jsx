import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css'
import Input from './InputForm/Input';
import Table from './TableList/TAble';

function App() {

  return (
     <BrowserRouter>
     <Routes>
      <Route path="/form" element={<Input/>}/>
      <Route path="/table" element={<Table/>}/>
     </Routes>
     </BrowserRouter>
  )
}

export default App
