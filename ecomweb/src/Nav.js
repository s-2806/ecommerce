
const Nav = () => {
    
    return ( 
        <nav className="Navbar">
            <div className="Navbarleftside">
           <img src="https://cdn.pixabay.com/photo/2013/07/13/12/43/girl-160172_960_720.png"alt="logo" className="pic" /> <div><span className="B">B</span>ookology</div>
           </div>
            <div className="Navbarrightside">
            <div><section href="/Home">Home</section></div> 
          <div> <section href="/About">About</section></div> 
           <div> <section href="/Bestsellers">Best sellers</section></div> 
            </div>

        </nav>
     );
}
 
export default Nav;

