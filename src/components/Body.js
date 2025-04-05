import { createBrowserRouter, RouterProvider  } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import { RemoveUser, SetUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(SetUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
          
          console.log("user sign in abhi",uid)
          // ...
        } else {
            dispatch(RemoveUser())
            
          // User is signed out
          // ...
        }
      });
    }, [])
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
