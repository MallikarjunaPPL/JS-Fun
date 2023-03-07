import React from 'react';
import {Link} from "react-router-dom";
import "./index.css";
const index = () => {
    return (
        <div className='header_cont'>
           <Link to="/home"><h1 >Home</h1></Link> 
           <Link to="/content"><h1 >Data Fetch</h1></Link> 
          
            
        </div>
    );
};

export default index;