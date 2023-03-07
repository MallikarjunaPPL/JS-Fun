import React from 'react';
import "./content.css";
import {useState,useEffect} from "react";
import Loader from 'react-loader-spinner';
import Display from "../../Components/Display/display"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Content = () => {
    const [isLoad,setLoad]=useState(true)
    const [emp,setData]=useState([])
    
    useEffect(()=>{
       
        const fetchData=async()=>{
           
            try{
            const response = await fetch('https://apis.ccbp.in/blogs')
            const statusCode = await response.statusCode
            console.log(statusCode)
            const data = await response.json()
            setLoad(true)
            const formattedData = data.map(eachItem => ({
              id: eachItem.id,
              title: eachItem.title,
              imageUrl: eachItem.image_url,
              avatarUrl: eachItem.avatar_url,
              author: eachItem.author,
              topic: eachItem.topic,
            }))
          
          
            setData(formattedData)
            
        }catch(error){
            console.log(error)
        }
        setLoad(false)
        }
        fetchData()
        
       
    },[])
    
    

    return (
        <div className='bckgrnd_cont'>
              {isLoad ? (
          <Loader className="load" type="TailSpin" color="#94018F" height={200} width={200} />
        ) : (
          emp.map(item => <Display details={item} key={item.id} />)
        )
        }  
        </div>
    );
};

export default Content;