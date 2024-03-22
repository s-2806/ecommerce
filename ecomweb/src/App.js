import Nav from './Nav';
import './App.css';
import About from './About';
import Bestsellers from './Bestsellers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <br/>
        <About/>
        <Bestsellers/>
         </header>
    </div>
  );
}

export default App;
