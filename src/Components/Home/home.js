import React from 'react';
import {useState} from "react";
import "./home.css";
const Home = () => {
    const item=[{
        id: 1,
        login: 'mojombo',
        avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
        title: 'following/other_user',
      },
      {
        id: 2,
        login: 'defunkt',
        avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
        title: 'following/other_user',
      },
      {
        id: 3,
        login: 'pjhyett',
        avatarUrl: 'https://avatars.githubusercontent.com/u/3?v=4',
        title: 'following/other_user',
      },
      {
        id: 4,
        login: 'wycats',
        avatarUrl: 'https://avatars.githubusercontent.com/u/4?v=4',
        title: 'following/other_user',
      },
      {
        id: 5,
        login: 'ezmobius',
        avatarUrl: 'https://avatars.githubusercontent.com/u/5?v=4',
        title: 'following/other_user',
      },
      {
        id: 6,
        login: 'ivey',
        avatarUrl: 'https://avatars.githubusercontent.com/u/6?v=4',
        title: 'following/other_user',
      },
      {
        id: 7,
        login: 'evanphx',
        avatarUrl: 'https://avatars.githubusercontent.com/u/7?v=4',
        title: 'following/other_user',
      },
      {
        id: 17,
        login: 'vanpelt',
        avatarUrl: 'https://avatars.githubusercontent.com/u/17?v=4',
        title: 'following/other_user',
      },
      {
        id: 18,
        login: 'wayneeseguin',
        avatarUrl: 'https://avatars.githubusercontent.com/u/18?v=4',
        title: 'following/other_user',
      },
      {
        id: 19,
        login: 'brynary',
        avatarUrl: 'https://avatars.githubusercontent.com/u/19?v=4',
        title: 'following/other_user',
      },
      {
        id: 20,
        login: 'kevinclark',
        avatarUrl: 'https://avatars.githubusercontent.com/u/20?v=4',
        title: 'following/other_user',
      },
      {
        id: 21,
        login: 'technoweenie',
        avatarUrl: 'https://avatars.githubusercontent.com/u/21?v=4',
        title: 'following/other_user',
      },
      {
        id: 22,
        login: 'macournoyer',
        avatarUrl: 'https://avatars.githubusercontent.com/u/22?v=4',
        title: 'following/other_user',
      },
      {
        id: 23,
        login: 'takeo',
        avatarUrl: 'https://avatars.githubusercontent.com/u/23?v=4',
        title: 'following/other_user',
      },
      {
        id: 25,
        login: 'caged',
        avatarUrl: 'https://avatars.githubusercontent.com/u/25?v=4',
        title: 'following/other_user',
      },
      {
        id: 26,
        login: 'topfunky',
        avatarUrl: 'https://avatars.githubusercontent.com/u/26?v=4',
        title: 'following/other_user',
      },
      {
        id: 27,
        login: 'anotherjesse',
        avatarUrl: 'https://avatars.githubusercontent.com/u/27?v=4',
        title: 'following/other_user',
      },
      {
        id: 28,
        login: 'roland',
        avatarUrl: 'https://avatars.githubusercontent.com/u/28?v=4',
        title: 'following/other_user',
      },
      {
        id: 29,
        login: 'lukas',
        avatarUrl: 'https://avatars.githubusercontent.com/u/29?v=4',
        title: 'following/other_user',
      },
      {
        id: 30,
        login: 'fanvsfan',
        avatarUrl: 'https://avatars.githubusercontent.com/u/30?v=4',
        title: 'following/other_user',
      },
      {
        id: 31,
        login: 'tomtt',
        avatarUrl: 'https://avatars.githubusercontent.com/u/31?v=4',
        title: 'following/other_user',
      },
      {
        id: 32,
        login: 'railsjitsu',
        avatarUrl: 'https://avatars.githubusercontent.com/u/32?v=4',
        title: 'following/other_user',
      },
      {
        id: 45,
        login: 'mojodna',
        avatarUrl: 'https://avatars.githubusercontent.com/u/45?v=4',
        title: 'following/other_user',
      },
      {
        id: 46,
        login: 'bmizerany',
        avatarUrl: 'https://avatars.githubusercontent.com/u/46?v=4',
        title: 'following/other_user',
      }
      
  ]
   
    const [search,setSearch]=useState("")

   
const filterData=item.filter((item)=>item.login.includes(search))

    
    return (
        <div className='list_cont_main'>
            <div className='cont'>
                <h1 className='heading'>List Of GitHub Users</h1>
          <input className='search-box' type="search" onChange={(event)=>  setSearch(event.target.value)} value={search} placeholder="Search with user name"/>
          
          <ul className="ul_container">
          {filterData.map(each => (
            <li className="card" key={each.id}>
              <div className="image-card">
                <img src={each.avatarUrl} className="image" alt="imageUrl" />
                <div className="column-card">
                  <h1 className="head">{each.login}</h1>
                  <p className="para">{each.title}</p>
                  <div className="inner-card">
                    <div className="alignment ">
                      <h1 className="inner-head">Articles</h1>
                      <p className="inner-para">38</p>
                    </div>
                    <div className="alignment ">
                      <h1 className="inner-head">Followers</h1>
                      <p className="inner-para">980</p>
                    </div>
                    <div className="alignment ">
                      <h1 className="inner-head">Rating</h1>
                      <p className="inner-para">8.9</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
          
          </div>
        </div>
    );
};

export default Home;