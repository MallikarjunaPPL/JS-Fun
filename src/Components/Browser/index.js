import React from 'react';
import "./index.css"
const Browser = (props) => {
    const {listDetail,onDelete}=props
    const {id,timeAccessed,logoUrl,title,domainUrl}=listDetail
    const onDeleteItem=()=>{
        onDelete(id)
    }
    return (
        <li className='brow_cont'>
              <h1 className='sear_head' >{timeAccessed}</h1>
            <div className='content'>
          
            <img src={logoUrl} alt="Wrong_Url" className='img_styling'/>
            <p className='para_sear'>{title}</p>
            <h1 className='sear_head'>{domainUrl}</h1>
           </div>
            <button className='delete_sty' onClick={onDeleteItem} ><img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="Wrong_Url" className='img_styling '/>
             </button>
        </li>
    );
};

export default Browser;