import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import Signup from "./Signup"

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login/>
        },
        {
            path: '/home',
            element: <Browse/>
        },
        {
            path: 'signup',
            element: <Signup/>
        }
    ])
  return (
   <>
   <RouterProvider router={appRouter}></RouterProvider>
   
   </>
  )
}

export default Body
