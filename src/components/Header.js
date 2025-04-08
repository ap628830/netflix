import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { RemoveUser, SetUser } from '../utils/userSlice';
import { logo } from "../utils/constants";

const Header = ()=>{
    const navigate = useNavigate()
    const user = useSelector(store=>store.user)
    const dispatch = useDispatch()
    useEffect(() => {
     const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(SetUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
          navigate("/browse")
          console.log("user sign in abhi",uid)
          // ...
        } else {
            dispatch(RemoveUser())
            navigate("/")
          // User is signed out
          // ...
        }
      });

      return ()=> unSubscribe()
    }, [])
    const signOutUser = () =>{
        signOut(auth).then(() => {
          // Sign-out successful.
            navigate('/')
        }).catch((error) => {
          // An error happened.
        });
    }
    return (
        <div className='absolute z-10 py-2 px-20 bg-gradient-to-b from-black w-full flex justify-between'>
            <img src={logo} alt="" width={200} height={150}/>

           {user && ( <div className="flex p-2">
                {console.log("user info ",user)}
            <img  src={user?.photoURL} alt="" className="w-12 h-12 " />
            <button onClick={signOutUser}>(sign out)</button>
            </div>)}

        </div>
        
    )
}

export default Header