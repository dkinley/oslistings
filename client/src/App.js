import './App.css';
import GetAll from './components/GetAll';
import Create from './components/Create';
import Edit from './components/Edit';
import Details from './components/Details';
import { Router } from '@reach/router'; // since router is not exported as default {} are required

function App() {
  return (
    <div className="App">
      <Router>
        <GetAll path="/osl" />
        <Create path="/osl/create" />
        <Edit path="/osl/:id/edit" />
        <Details path="/osl/:id"/> 
      </Router>
    </div>
  );
}
export default App;