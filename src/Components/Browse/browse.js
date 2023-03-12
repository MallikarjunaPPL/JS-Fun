import React,{useState} from 'react';
import Browser from "../Browser/index"
import "./browse.css"
const Browse = () => {
    const [search,setSearch]=useState("")
    const searchVal=(event)=>{
        setSearch(event.target.value)
    }
    const detailsLi = [
        {
          id: 0,
          timeAccessed: '07:45 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
          title: 'Instagram',
          domainUrl: 'Instagram.com',
         
        },
        {
          id: 1,
          timeAccessed: '05:45 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
          title: 'Twitter. It’s what’s happening / Twitter',
          domainUrl: 'Twitter.com',
         
        },
        {
          id: 2,
          timeAccessed: '04:35 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
          title: 'Facebook – log in or sign up',
          domainUrl: 'Facebook.com',
          key_id:"insta"
        },
        {
          id: 3,
          timeAccessed: '04:25 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
          title: 'LinkedIn: Log In or Sign Up',
          domainUrl: 'Linkedin.com',
          key_id:"insta"
        },
        {
          id: 4,
          timeAccessed: '04:00 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
          title: 'Hashnode: Everything you need to start blogging as a developer!',
          domainUrl: 'Hashnode.com',
         
        },
        {
          id: 5,
          timeAccessed: '03:25 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
          title: 'GitHub: Where the world builds software · GitHub',
          domainUrl: 'Github.com',
         
        },
      
        {
          id: 6,
          timeAccessed: '02:45 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
          title: 'React – A JavaScript library for building user interfaces',
          domainUrl: 'Reactjs.org',
         
        },
        {
          id: 7,
          timeAccessed: '01:25 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
          title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
          domainUrl: 'Stackoverflow.com',
         
        },
      
        {
          id: 8,
          timeAccessed: '09:25 AM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
          title: 'Gmail',
          domainUrl: 'Mail.google.com',
        
        },
        {
          id: 9,
          timeAccessed: '09:00 AM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
          title: 'Google',
          domainUrl: 'Google.com',
          
        },
      ]
     const [li,setLi]=useState( detailsLi)
     const UpdatedData=li.filter((item)=>item.title.toLowerCase().includes(search))
    const onDelete=id=>{
        const filData=li.filter((item)=>item.id!==id)
        setLi(filData)
    }
    return (
        <>
        <div className='search_container'>
            <h1 className='head_sear'>Browser History</h1>
            
            <input placeholder="Search With Title" className='input_sear' type="search" value={search} onChange={searchVal}/>
            </div>
            
           {UpdatedData.length===0?<p className='ntg'>*****There is Nothing to Show*****</p>:
           (<ul>
               {UpdatedData.map((details)=> (
                  <Browser key={details.id} listDetail={details} onDelete={onDelete}/>
               )
               )}
            </ul>)
          }
        
        </>
    );
};

export default Browse;