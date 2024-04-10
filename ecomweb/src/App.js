import Nav from './Nav';
import './App.css';
import About from './About';
import Bestsellers from './Bestsellers';
import Ourcollectionss from './Ourcollectionss';
import Contactusform from './Contactusform';
import Footer from './Footer';
import Review from './Review';
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
        {/* <Review/> */}
        <Contactusform/>
        <Footer/>
           <div className='topbtn'><a href="#App" className="top">^</a></div>
    </div>
  );
}

export default App;
