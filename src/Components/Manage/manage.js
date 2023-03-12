import React from 'react';
import "./manage.css"
const manage = (props) => {
    const {details}=props
    const {id, domain_details,user_details, password_details}=details
    return (
        <div className='container_pass'>
            <div className="cont_main">
            <p className='heading_h2'>{domain_details}</p>
            <p className='heading_h2'>{user_details}</p>
            <p className='heading_h2'>{password_details}</p>
            </div>
        </div>
    );
};

export default manage;