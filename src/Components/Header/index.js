import React from 'react';
import {Link} from "react-router-dom";
import "./index.css";
const index = () => {
    return (
        <div className='header_cont'>
           <Link className='heading_h' to="/home"><h1  >Home</h1></Link> 
           <Link className='heading_h' to="/content"><h1 >Data Fetch</h1></Link> 
           <Link className='heading_h' to="/browse"><h1>Browse</h1></Link>
           <Link className='heading_h' to="/password"><h1>Data Field</h1></Link>
        </div>
    );
};

export default index;