import {BrowserRouter , Route , Routes} from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import "./App.css"
import "./index.css"
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/' element={<Signin/>} />
        <Route path='/Blog/:id' element={<Blog/>} />
        <Route path='/Blog' element={<Blogs/>} />
        <Route path='/publish' element={<Publish/>} />
    
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
