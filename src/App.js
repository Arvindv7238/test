import logo from './logo.svg';
import './App.css';
import Test from './Test';
import SelectTest01 from './components/SelectTest01';
import SelectTest02 from './components/SelectTest02';
import Customer from './components/Customer'
import StateAndLifeCycle from './components/StateAndLifeCycle';
import FilterTheDataWithInArray from './components/FilterTheDataWithInArray';
import ListsAndKeys from './components/ListsAndKeys';
function App() {

  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <ListsAndKeys/>
     {/*<StateAndLifeCycle data={new Date}/>
       <SelectTest02/>

     
      <SelectTest01/>
      <Test/> 
      */}
    </div>
  );
}

export default App;
