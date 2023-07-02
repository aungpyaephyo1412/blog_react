import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blogs from "./blog/Blogs.jsx";
import Navbar from "./layouts/Navbar.jsx";
import BlogCreate from "./blog/Create.jsx";
import Details from "./blog/Details.jsx";
import Error from "./layouts/Error.jsx";
import Index from "./layouts/Index.jsx";
import Edit from "./blog/Edit.jsx";

const App = () => {
  return(
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Index/>} />
              <Route path='/blog/index' element={<Blogs/>}/>
              <Route path='/blog/create' element={<BlogCreate/>}/>
              <Route path="/blog/detail/:slug" element={<Details/>}/>
              <Route path="/blog/edit/:slug" element={<Edit/>}/>
              <Route path='*' element={<Error/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
