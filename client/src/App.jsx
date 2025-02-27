import React from "react"
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import { logo } from "./assets";



import {Home,CreatePost} from './pages'
function App() {
  return (
   <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-18 object-contain"></img>
        </Link>
        <Link to="/create-post" className="w-24 h-9 text-lg flex items-center justify-center font-inter font-medium bg-[#A04732] text-white px-4 py-2 rounded-md" >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]:">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </main>
   </BrowserRouter>
  )
}

export default App
