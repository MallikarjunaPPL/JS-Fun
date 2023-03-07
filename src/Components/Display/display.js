import React from 'react';
import "./display.css";
const display = (props) => {
    const {details}=props
    const { imageUrl, topic, title, avatarUrl, author}=details
    return (
        <div className='dis_cont'>
            <div className='img_cont'>
        <img className='img_sty' src={imageUrl} alt="Wrong_Url"/>
        <h1 className='heading_h1'>{topic}</h1>
        <p  className='para_header'>{title}</p>
        </div>
        <div className='avatar_cont'>
        <img className='img_st' src={avatarUrl} alt="Wrong_Url"/>
        <div className='paragra_cont'>
        <p  className='head_h1'>{author}</p>
        <hr className='hr_width'/>
        <p className='para_header'>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        </div>
        </div>  
        </div>
    );
};

export default display;