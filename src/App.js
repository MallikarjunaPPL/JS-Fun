import Header from "./Components/Header/index";
import Home from "./Components/Home/home";
import Content from "./Components/Content/content";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Password from "./Components/Password/password"
import Browse from "./Components/Browse/browse"
import './App.css';


function App() {
  return (
   <>
   <BrowserRouter>
   <div className='main_cont'>
   <Header/>
   <Routes>
   <Route exact path="/password" element={<Password/>}/>
       <Route exact path="/content" element={<Content/>}/> 
       <Route exact path="/home" element={<Home/>}/> 
       <Route exact path="/browse" element={<Browse/>}/> 
       
    </Routes>
   </div>
   </BrowserRouter>
   </>
  );
}

export default App;
