import Nav from './Nav';
import './App.css';
import About from './About';
import Bestsellers from './Bestsellers';
import Ourcollectionss from './Ourcollectionss';
import Contactusform from './Contactusform';

function App() {
   return (
    <div className="App" id='App'>
      <header className="App-header">
        <Nav/>
        <br/>
      </header>
          <About/>
        <Bestsellers/>
        <Ourcollectionss/>
        <Contactusform/>
        <div className='topbtn'><a href="#App" className="top">^</a></div>
    </div>
  );
}

export default App;
