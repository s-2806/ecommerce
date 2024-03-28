
const Nav = () => {
    
    return ( 
        <nav className="Navbar">
            <div className="Navbarleftside">
           <img src="https://cdn.pixabay.com/photo/2013/07/13/12/43/girl-160172_960_720.png"alt="logo" className="pic" /> <div><span className="B">B</span>ookology</div>
           </div>
            <div className="Navbarrightside">
            <a href="#App">Home</a>
            <a href="#About">About </a>
            <a href="#Bestsellers">Best sellers</a>         
            </div>

        </nav>
     );
}
 
export default Nav; 

