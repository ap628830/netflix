import { createBrowserRouter, RouterProvider  } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"


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
            path: 'browse',
            element: <Browse/>
        }
    ])
  return (
   <>
 
   <RouterProvider router={appRouter}></RouterProvider>
   
   </>
  )
}

export default Body
