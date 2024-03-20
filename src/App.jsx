import './App.css'
import { events } from "./assets/events"
import FilterableShowsList from './components/FilterableShowsList';

function App() {

  return (
    <>
      <FilterableShowsList shows={events} />
    </>
  )
}

export default App
