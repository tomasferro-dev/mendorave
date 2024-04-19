import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { events } from "./assets/events"
import FilterableShowsList from './components/FilterableShowsList';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FilterableShowsList shows={events} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
