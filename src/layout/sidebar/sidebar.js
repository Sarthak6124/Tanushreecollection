import React from 'react';
import './sidebar.css'
import { NavLink } from "react-router-dom";

function sidebar(){

return(
<div>
    <body>
    <div>
        <div className="sidebar">
        <NavLink to="/dashboard">           <a >Home</a>       </NavLink>
        <NavLink  to="/billing">   <a >billing</a>    </NavLink>  
        <NavLink to="/warehouse">  <a >warehouse</a>  </NavLink>
       
        </div>
        {/* Page content */}
        <div className="content">
          ..
        </div>
      </div>
</body> 
</div>
)
}
export default sidebar;
