const Contactusform = () => {
    return ( 
      <div className="Contactus" id='contactus'>
        
        <form>
            <h3>Contact us form</h3>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Name"/>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email"/>
            <label for="phone">Phone</label>  
            <input type="tel" id="phone" name="phone" placeholder="Phone number"/>
            <label for="Review">Review</label>
            <textarea id="Review" name="Review" placeholder="Write your review"></textarea>
            <button type="submit">Submit</button>
        </form>
     </div>  
     );
}
 
export default Contactusform;