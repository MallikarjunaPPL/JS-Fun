import Header from "./Components/Header/index";
import Home from "./Components/Home/home";
import Content from "./Components/Content/content";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
   <>
   <BrowserRouter>
   <div className='main_cont'>
   <Header/>
   <Routes>
      
       <Route exact path="/content" element={<Content/>}/> 
       <Route exact path="/home" element={<Home/>}/> 

    </Routes>
   </div>
   </BrowserRouter>
   </>
  );
}

export default App;
