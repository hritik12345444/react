import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import GitHub from './component/GitHub/GitHub.jsx'


// yeha router ke andar nesting krr rhe hai 
// layout se hmm header and footer ko le liye hai aur children me nesting krr rhe hai component ko rendern krne ke liye
const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children: [
      {
        path : "",
        element: <Home />
      },
      {
        path : "about",
        element: <About />
      },
      {
        path : "contact",
        element : <Contact /> 
      },
      {
        path : "user/:userid",  // userid important hai kyuki yeha hmm ek alag trh ka cheez create krr rheahi 
        element : <User />
      },
      {
        path : "github",
        element : <GitHub />
      }

    ]
  }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
