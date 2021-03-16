import React from 'react';
import './billing.css';


function billing(){

return (
<div >
    <body  className="ok"   > 
        <h2>bill</h2>
        <form >

          <label htmlFor="fname"> perticular Name:</label><br />
          <input type="text" id="fname" name="fname" defaultValue="A" /><br />

          <label htmlFor="fname">Quantity:</label><br />
          <input type="text" id="fname" name="fname" defaultValue="2" /><br />

          <label htmlFor="fname">selling price:</label><br />
          <input type="text" id="fname" name="fname" defaultValue="1000" /><br />

          <label htmlFor="fname">margin percentage:</label><br />
          <input type="text" id="fname" name="fname" defaultValue="10%" /><br />

          <label htmlFor="lname">total bill:</label><br />
          <input type="text" id="lname" name="lname" defaultValue="" /><br /><br />

          <input type="submit" defaultValue="Submit" />
        </form> 
        </body>
      </div>
    )

}
export default billing;
